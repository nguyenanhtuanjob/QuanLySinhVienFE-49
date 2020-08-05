//Khai báo svService tương tác api
var svService = new SinhVienService();



//-----------giao tiếp với api thông qua axios--------------
var getApiSinhVien =function(){
    var objectAPI ={
        url:'http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien', //đường dẫn đi đến file riêng backend
        methods:'GET',//phương thức backend cung cấp
    }
    
    //Gửi yêu cầu dữ liệu đến backend =>backend
    var promise = axios(objectAPI);
    
    //Xử lý thành công
    var funcSuccess = function(result){
        console.log(result.data);
        renderTableSinhVien(result.data);
    }
    //Xử lý thất bại
    var funcFail = function(error){
        console.log(error);
    }
    //then(): Hàm nhận vào giá trị là 1 hàm xử lý thành công
    
    //catch(): Hàm nhạn vào giá trị là 1 hàm xử lý thất bại
    promise.then(funcSuccess).catch(funcFail);
    
    //Lưu ý: ajax là 1 kỹ thuật xử lý bất đồng bộ.
}


getApiSinhVien();

var renderTableSinhVien  = function(mangSinhVien){
    var contentTable='';
    //sau khi lấy được data từ backend => tạo bảng giao diện
    for( var i=0;i<mangSinhVien.length;i++)
    {
        //Lấy ra từng sinh viên trong dữ liệu backend trả về
        var sinhVien = mangSinhVien[i];
        //Tạo ra 1 sv object từ prototype sinh viên
        var sv = new SinhVien();
        sv.maSV = sinhVien.MaSV;
        sv.tenSV = sinhVien.HoTen;
        sv.email = sinhVien.Email;
        sv.diemToan = sinhVien.DiemToan;
        sv.diemLy = sinhVien.DiemLy;
        sv.diemHoa = sinhVien.DiemHoa;
        sv.diemRenLuyen = 5;
        //Từ dữ liệu sinh viên tạo ra từng dòng <tr> tương ứng
        contentTable +=`
            <tr>
            <td>${sv.maSV}</td>
            <td>${sv.tenSV}</td>
            <td>${sv.email}</td>
            <td>${sv.tinhDiemTrungBinh()}</td>
            <td>${sv.xepLoai()}</td>
            <td>${sv.diemRenLuyen}</td>
            <td class="btn btn-primary" onclick="chinhSuaSinhVien('${sv.maSV}')">Chỉnhsửa</td>
            <td><button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSV}')">Delete</button></td>
            </tr>
        `
    }
    //DOM đến giao diện ghi thông tin dữ liệu vào
    document.getElementById('tableSinhVien').innerHTML = contentTable;
}

var chinhSuaSinhVien = function(maSV){
    var promise = svService.layThongTinSinhVien(maSV);

    promise.then(function(result){
        console.log(result.data);
        var sinhVienEdit = result.data;
        document.getElementById('maSinhVien').value = sinhVienEdit.MaSV;
        document.getElementById('tenSinhVien').value = sinhVienEdit.HoTen;
        document.getElementById('diemToan').value = sinhVienEdit.DiemToan;
        document.getElementById('diemLy').value = sinhVienEdit.DiemLy;
        document.getElementById('diemHoa').value = sinhVienEdit.DiemHoa;
        document.getElementById('email').value = sinhVienEdit.Email;
        
        //Khoá mã lại không cho người dùng sữa mã
        document.getElementById('maSinhVien').disabled = true;
        document.getElementById('themSinhVien').disabled = true;
    }).catch(function(error){
        console.log(error);
    })
}

// --------------- Lưu thông tin sinh viên---
document.getElementById('btnLuuSinhVien').onclick = function(){
    //Lấy thông tin sinh viên gán vào data gửi lên api
    var sinhVienCapNhat = {
            "MaSV": document.getElementById('maSinhVien').value,
            "HoTen": document.getElementById('tenSinhVien').value,
            "Email": document.getElementById('email').value,
            "SoDT": "123456789",
            "CMND": "123456789",
            "DiemToan": document.getElementById('diemToan').value,
            "DiemLy": document.getElementById('diemLy').value,
            "DiemHoa": document.getElementById('diemHoa').value,
    }
    //Gọi service cập nhật dữ liệu
    var promise = svService.capNhatSinhVien(sinhVienCapNhat);
    promise.then(function(result){
        console.log(result.data);
        //Load lại tableSinhVien
        getApiSinhVien();
        //Mở khoá nút thêm sinh viên

        document.getElementById('themSinhVien').disabled =false;
        document.getElementById('maSinhVien').disabled = false;
        document.getElementById('btnLuuSinhVien').disabled =false;
    }).catch(function(error){
        console.log(error);
    })
    console.log(sinhVienCapNhat);
}

//---------Thêm dữ liệu cho server-------
document.getElementById('themSinhVien').onclick = function() {
    //Lấy thông tin từ người dùng gán vào data backend yêu cầu => data phải chuẩn định dạng backend yêu cầu
    var sinhVien ={
        MaSV: document.getElementById('maSinhVien').value,
        HoTen: document.getElementById('tenSinhVien').value,
        Email: document.getElementById('email').value,
        SoDT: 112345679,
        CMND: 123456789,
        DiemToan: document.getElementById('diemToan').value,
        DiemLy: document.getElementById('diemLy').value,
        DiemHoa: document.getElementById('diemHoa').value,
    }
    console.log(sinhVien);
    //Dùng axios gọi ajax đưa dữ liệu lên backend xử lý
    var objectAxios ={
        url:'http://svcy.myclass.vn/api/SinhVien/ThemSinhVien',
        method:'POST',
        data:sinhVien //Thuộc tính backend yêu cầu dữ liệu gửi đi phải đúng định dạng
    }
    var promise = axios(objectAxios);
    promise.then(function(result){
        //Thêm thành công gọi lại api lấy danh sách sinh viên mới về
        getApiSinhVien();
        console.log(result);
    }).catch(function(error){
        console.log(error);
    })
}

//-----Xoá sinh viên qua api

var xoaSinhVien = function(maSV){
    //Dùng service gọi api
    var promise = svService.xoaSinhVien(maSV);

    promise.then(function(result){
        //Xoá thành công thì load lại api get LayDanhSachSinhVien
        getApiSinhVien();
        console.log(result.data);
    }).catch(function(error){
        console.log(error);
    })
}