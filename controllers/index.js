

//mangSinhVien: chứa thông tin tất cả cả sinh viên dược thêm từ form
var mangSinhVien =[];
var hihi =[];
var validate = new Validation();

var hihaha= [];



document.getElementById('themSinhVien').onclick = function(){
    //Lấy thông tin sinh viên
    var sinhVien = new SinhVien();
    sinhVien.maSinhVien = document.querySelector('#maSinhVien').value;
    sinhVien.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sinhVien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sinhVien.email = document.querySelector('#email').value;
    sinhVien.diemToan = document.querySelector('#diemToan').value;
    sinhVien.diemLy = document.querySelector('#diemLy').value;
    sinhVien.diemHoa = document.querySelector('#diemHoa').value;
    sinhVien.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    console.log(sinhVien);



    //29-07-2020
    //Kiểm tra dữ liệu lệ trước khi thêm vào mảng
    //trim() : loại bỏ khoảng trống đầu và cuối của chuỗi

    var valid = validate.kiemTraRong(sinhVien.maSinhVien,'#error_maSinhVien') & validate.kiemTraRong(sinhVien.tenSinhVien,'#error_tenSinhVien') & validate.kiemTraRong(sinhVien.email,'#error_email') & validate.kiemTraRong(sinhVien.diemToan,'#error_diemToan') & validate.kiemTraRong(sinhVien.diemLy,'#error_diemLy') & validate.kiemTraRong(sinhVien.diemHoa,'#error_diemHoa') & validate.kiemTraRong(sinhVien.diemRenLuyen,'#error_diemRenLuyen');

    //-----------kiểm tra tên là ký tự-------------
    // var regexAllletter = /^[a-z A-Z]+$/;
    // if(regexAllletter.test(sinhVien.tenSinhVien))
    // {
    //     document.querySelector('#error_all_letter_tenSinhVien').style.display ='none';
    //     document.querySelector('#error_all_letter_tenSinhVien').innerHTML = '';
    // }
    // else{
    //     document.querySelector('#error_all_letter_tenSinhVien').style.display ='block';
    //     document.querySelector('#error_all_letter_tenSinhVien').innerHTML='Tên không được có số và ký tự đặc biệt!';
    //     valid = false;
    // }

    valid &= validate.kiemTraTatCaLaChuoi(sinhVien.tenSinhVien,'#error_all_letter_tenSinhVien');

    //-------Kiểm tra email----------
    valid &= validate.kiemTraEmail(sinhVien.email,'#error_all_letter_email');

    //-------Kiểm tra nhập só-------
    valid &= validate.kiemTraNumber(sinhVien.diemToan,'#error_all_number_diemToan');
    valid &= validate.kiemTraNumber(sinhVien.diemLy,'#error_all_number_diemLy');
    valid &= validate.kiemTraNumber(sinhVien.diemHoa,'#error_all_number_diemHoa');
    valid &= validate.kiemTraNumber(sinhVien.diemRenLuyen,'#error_all_number_diemRenLuyen');
    valid &= validate.kiemTraGiaTri(sinhVien.diemToan,'#error_min_max_value_diemToan',0,10);
    valid &= validate.kiemTraGiaTri(sinhVien.diemLy,'#error_min_max_value_diemLy',0,10);
    valid &= validate.kiemTraGiaTri(sinhVien.diemHoa,'#error_min_max_value_diemHoa',0,10);
    valid &= validate.kiemTraGiaTri(sinhVien.diemRenLuyen,'#error_min_max_value_diemRenLuyen',0,10);

    //-------Kiểm tra độ dài
    valid &= validate.kiemTraDoDai(sinhVien.maSinhVien,'#error_min_max_lenght_maSinhVien',4,6);

    
    // if(!valid){
    //         return;
    // }
    // if(sinhVien.maSinhVien.trim() ===''){
    //     //Dom đến thẻ thông báo dưới thẻ inputmaSinhVien
    //     document.getElementById('error_maSinhVien').style.display = 'block';
    //     document.getElementById('error_maSinhVien').innerHTML = 'Mã sinh viên không được bỏ trống';
    //     valid =false;
    // }
    // else{ // trường hợp người dụng nhập hợp lệ (display none,gán rỗng lỗi)
    //     document.getElementById('error_maSinhVien').innerHTML = '';
    //     document.getElementById('error_maSinhVien').style.display = 'none';
    // }

    // if(sinhVien.tenSinhVien.trim() ==='')
    // {
    //     document.getElementById('error_tenSinhVien').style.display = 'block';
    //     document.getElementById('error_tenSinhVien').innerHTML = 'Tên sinh viên không được bỏ trống!'
    //     valid =false;
    // }
    // else{
    //     document.getElementById('error_tenSinhVien').innerHTML = '';
    //     document.getElementById('error_tenSinhVien').style.display = 'none';
    // }
    // if(sinhVien.email.trim() ===''){
    //     document.getElementById('error_email').style.display = 'block';
    //     document.getElementById('error_email').innerHTML = 'Email không được bỏ trống';
    //     valid =false;
    // }
    // else{
    //     document.getElementById('error_email').innerHTML = '';
    //     document.getElementById('error_email').style.display = 'none';
    // }

    // if(sinhVien.diemToan.trim() === ''){
    //     document.getElementById('error_diemToan').style.display = 'block';
    //     document.getElementById('error_diemToan').innerHTML = 'Điểm toán không được bỏ trống';
    //     valid =false;
    // }
    // else{
    //     document.getElementById('error_diemToan').innerHTML = '';
    //     document.getElementById('error_diemToan').style.display = 'none';
    // }
    // if(sinhVien.diemLy.trim() === ''){
    //     document.getElementById('error_diemLy').style.display= 'block';
    //     document.getElementById('error_diemLy').innerHTML ='Điểm lý không được bỏ trống!'
    // }
    // else{
    //     document.getElementById('error_diemLy').innerHTML = '';
    //     document.getElementById('error_diemLy').style.display = 'none';
    // }

    // if(sinhVien.diemHoa.trim() === ''){
    //     document.getElementById('error_diemHoa').style.display= 'block';
    //     document.getElementById('error_diemHoa').innerHTML ='Điểm hoá không được bỏ trống!';
    //     valid =false;
    // }
    // else{
    //     document.getElementById('error_diemHoa').innerHTML = '';
    //     document.getElementById('error_diemHoa').style.display = 'none';
    // }

    // if(sinhVien.diemRenLuyen.trim() === ''){
    //     document.getElementById('error_diemRenLuyen').style.display= 'block';
    //     document.getElementById('error_diemRenLuyen').innerHTML ='Điểm rèn luyện không được bỏ trống!'
    //     valid =false;
    // }
    // else{
    //     document.getElementById('error_diemRenLuyen').innerHTML = '';
    //     document.getElementById('error_diemRenLuyen').style.display = 'none';
    // }

    //Nếu như valid === false => không hợp lệ
    // if(!valid){
    //     return;
    // }
    
    //push(): phương thức thêm 1 phần tử vào mangSinhVien
    mangSinhVien.push(sinhVien);

    renderTableSinhVien(mangSinhVien);
    // console.log(mangSinhVien);

    luuLocalStorage();





    
    // //Taọ nội dung thẻ tr SinhVien
    // var trSinhVien = document.createElement('tr');
    // //Tạo nội dung các thẻ td

    // var tdMaSinhVien = document.createElement('td');
    // tdMaSinhVien.innerHTML = sinhVien.maSinhVien;

    // var tdTenSinhVien = document.createElement('td');
    // tdTenSinhVien.innerHTML = sinhVien.tenSinhVien;

    // var tdLoaiSinhVen = document.createElement('td');
    // tdLoaiSinhVen.innerHTML = sinhVien.loaiSinhVien;

    // var tdEmail = document.createElement('td');
    // tdEmail.innerHTML = sinhVien.email;

    // var tdDiemTrungBinh = document.createElement('td');
    // tdDiemTrungBinh.innerHTML = sinhVien.tinhDiemTrungBinh();

    // var tdXepLoai = document.createElement('td');
    // tdXepLoai.innerHTML = sinhVien.xepLoai();

    // //Thêm 1 trường td dành cho button xoá
    // var tdAction = document.createElement('td');
    // var btnDetele = document.createElement('button')
    // btnDetele.innerHTML = 'Delete';
    // btnDetele.className ='btn btn-danger';
    // btnDetele.id ='btnXoa';
    // btnDetele.onclick = function(){
    //     //Tìm ra phần tử cha (td) => từ td tìm ra tr xoá
    //     btnDetele.parentElement.parentElement.remove();
    // }
    // tdAction.appendChild(btnDetele);
    // //Đưa các thẻ td vào thẻ tr
    // trSinhVien.appendChild(tdMaSinhVien);
    // trSinhVien.appendChild(tdTenSinhVien);
    // trSinhVien.appendChild(tdLoaiSinhVen);
    // trSinhVien.appendChild(tdEmail);
    // trSinhVien.appendChild(tdDiemTrungBinh);
    // trSinhVien.appendChild(tdXepLoai);
    // trSinhVien.appendChild(btnDetele);
    // // Dom đến thẻ tbody appendChild(tr);
    // document.getElementById('tableSinhVien').appendChild(trSinhVien);
}

var renderTableSinhVien = function(mangSV){
    // từ dữ liệu mảng tạo ra các thẻ tr tương ứng
    var chuoiTr ='';
    for(var index = 0 ;index < mangSV.length ; index++)
    {
        //mỗi lần duyệt lấy ra dữ liệu của 1 sinh viên trong mảng
        var sinhVien = mangSV[index];
        //Tạo object mới lấy dữ liệu từ mangSV[i] gán kết quả
        var sv = new SinhVien();
        sv.maSinhVien = sinhVien.maSinhVien;
        sv.tenSinhVien = sinhVien.tenSinhVien;
        sv.loaiSinhVien = sinhVien.loaiSinhVien;
        sv.email = sinhVien.email;
        sv.diemToan = sinhVien.diemToan;
        sv.diemLy = sinhVien.diemLy;
        sv.diemHoa = sinhVien.diemHoa;
        sv.diemRenLuyen = sinhVien.diemRenLuyen;
        //Từ dữ liệu sinh viên tạo ra từng dòng <tr> tương ứng
        chuoiTr +=`
            <tr>
            <td>${sv.maSinhVien}</td>
            <td>${sv.tenSinhVien}</td>
            <td>${sv.loaiSinhVien}</td>
            <td>${sv.email}</td>
            <td>${sv.tinhDiemTrungBinh()}</td>
            <td>${sv.xepLoai()}</td>
            <td>${sv.diemRenLuyen}</td>
            <td><button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSinhVien}')">Delete</button></td>
            </tr>
        `
    }
    //Thoát ra vòng lặp
    document.getElementById('tableSinhVien').innerHTML =chuoiTr;
}

var xoaSinhVien = function(maSinhVien){
    // Từ mã sinh viên sẽ tìm ra thăng sinh viên cần xoá
    for(var index =mangSinhVien.length - 1; index >=0; index--){
        var sinhVien = mangSinhVien[index];
        //nếu sinhVien trong mảng có mã = maSinhVien được click
        if(sinhVien.maSinhVien === maSinhVien){
            // tại vị trí đó mình sẽ xoá phần đó đi
            mangSinhVien.splice(index,1);
        }
    }
    //Sau khi xoá xong tạo lại tableSinhVien
    renderTableSinhVien(mangSinhVien);
}

var luuLocalStorage = function(){
    // Biến mangSinhVien => chuỗi
    var sMangSinhVien = JSON.stringify(mangSinhVien);

    //Lưu vào localstorage
    localStorage.setItem('mangSinhVien',sMangSinhVien);

}

var layDuLieuLocalStorage = function(){
    if(localStorage.getItem('mangSinhVien')){
        //Lấy dữ liệu từ localstorage
        var sMangSinhVien = localStorage.getItem('mangSinhVien');

        //Chuyển chuỗi localstorage về mảng (object) và gán cho mangSinhVien
        mangSinhVien = JSON.parse(sMangSinhVien);
        //Gọi hàm render mangSinhVien => render lại table
        renderTableSinhVien(mangSinhVien);
        // console.log(sMangSinhVien);
    }
}
layDuLieuLocalStorage();

console.log(axios);

var hienTHiTHongTin= function(){
    console.log('userB_commit');
}
var laySinhVienCoDiemCaoNhat = function(){
    console.log('userB','laySinhVienDiemCaoNhat');
}