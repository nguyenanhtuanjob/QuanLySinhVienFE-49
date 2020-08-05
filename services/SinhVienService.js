var SinhVienService =function(){
    
    this.themSinhVien = function(sinhVien){
        return axios({
            url:'http://svcy.myclass.vn/api/SinhVien/ThemSinhVien',
            method:'POST',
            data:sinhVien
        })
    }
    
    
    
    this.xoaSinhVien = function(maSV){
        return axios({
            url:'http://svcy.myclass.vn/api/SinhVien/XoaSinhVien/'+ maSV,
            method: 'DELETE'
        })
    }

    // lấy thông tin sinh viên
    this.layThongTinSinhVien = function(maSV){
        return axios({
            url:'http://svcy.myclass.vn/api/SinhVien/LayThongTinSinhVien/'+ maSV,
            method:'GET'
        })
    }
    this.capNhatSinhVien = function(sinhVienUpdate){
        return axios({
            url:'http://svcy.myclass.vn/api/SinhVien/CapNhatThongTinSinhVien',
            method:'PUT',
            data: sinhVienUpdate
        })
    }
}



// //
// var Task = function(){
//     this.taskNAme
// }

// var taskList =[
//     {taskID:1,taskName:'task1',done:false},
//     {taskID:2,taskName:'task1',done:false},
//     {taskID:3,taskName:'task1',done:false}
// ]