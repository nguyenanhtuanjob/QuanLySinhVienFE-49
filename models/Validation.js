var Validation = function(){
    this.kiemTraRong = function(value,SelectorError){
        if(value.trim() ===''){
            document.querySelector(SelectorError).innerHTML='Không được bỏ trống';
            document.querySelector(SelectorError).style.display ='block';
            return false;
        }
        document.querySelector(SelectorError).innerHTML ='';
        document.querySelector(SelectorError).style.display ='none';
        return true;
    }

    this.kiemTraTatCaLaChuoi = function(value,SelectorError){
        var regexAlletter = /^[a-z A-Z]+$/;
        if(regexAlletter.test(value.trim())){
            document.querySelector(SelectorError).innerHTML ='';
            document.querySelector(SelectorError).style.display ='none';
        return true;
        }
        else{
            document.querySelector(SelectorError).innerHTML='Không được nhập số và ký tự đặc biệt!';
            document.querySelector(SelectorError).style.display ='block';
            return false;
        }
    }
    this.kiemTraEmail = function(value,SelectorError){
        var regexEmail =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regexEmail.test(value.trim())){
            document.querySelector(SelectorError).innerHTML ='';
            document.querySelector(SelectorError).style.display ='none';
        return true;
        }
        else{
            document.querySelector(SelectorError).innerHTML='Email không hợp lệ!';
            document.querySelector(SelectorError).style.display ='block';
            return false;
        }
    }

    this.kiemTraNumber = function(value,SelectorError){
        var regexNumber = /^[0-9.]+$/;
        if(regexNumber.test(value.trim())){
            document.querySelector(SelectorError).innerHTML ='';
            document.querySelector(SelectorError).style.display ='none';
        return true;
        }
        
            document.querySelector(SelectorError).innerHTML='Điểm phải là số';
            document.querySelector(SelectorError).style.display ='block';
            return false;
        
    }

    this.kiemTraGiaTri = function (value,SelectorError,minValue,maxValue){

        var valid = this.kiemTraNumber(value,SelectorError);
        //Nếu nhỏ hơn giá trị nhỏ nhất hoặc lớn hơn giá trị lớn nhất thì báo lỗi
        if(Number(value.trim())< minValue || Number(value.trim())>maxValue || !valid){
            document.querySelector(SelectorError).innerHTML =`Giá trị từ ${minValue} - ${maxValue} !`;
            document.querySelector(SelectorError).style.display ='block';
            return false;
        }
        document.querySelector(SelectorError).innerHTML='';
        document.querySelector(SelectorError).style.display ='none';
            return false;
    }

    this.kiemTraDoDai = function(value,SelectorError,minLength,maxLength){
        if(value.length < minLength || value.length > maxLength){
            document.querySelector(SelectorError).innerHTML =`Độ dài từ ${minValue} - ${maxValue}`;
            document.querySelector(SelectorError).style.display ='block';
            return false;
        }
        else{
            document.querySelector(SelectorError).innerHTML='';
            document.querySelector(SelectorError).style.display ='none';
            return false;
        }
    }
}