

//pr4
//thiết lập 2 giá trị cũ và mới sau khi người dùng nhập
function lay_gia_tri_cu(){
    return document.getElementById('gia-tri-cu').innerText;
}
function in_gia_tri_cu(so){
    return document.getElementById('gia-tri-cu').innerText = so;
}
function lay_gia_tri_moi(){
    return document.getElementById('gia-tri-moi').innerText;
}
function in_gia_tri_moi(so){
    return document.getElementById('gia-tri-moi').innerText=so;
}
//định dạng chuỗi số ngăn cách bằng dấu ','
function Dinh_dang_chuoi_so(so){
    let n = Number(so);
    let gia_tri = n.toLocaleString("en");
    return gia_tri;
}
function Xoa_Dinh_dang_chuoi(so) {
    return Number(so.replace(/,/g, ''))
}
//tao nut hoat dong tren may tinh
var con_so = document.getElementsByClassName('number');
for(var i=0; i<con_so.length; i++) {
    con_so[i].addEventListener('click', function() {
        var ket_qua = Xoa_Dinh_dang_chuoi(lay_gia_tri_moi())
        if(ket_qua != NaN) {
            ket_qua = ket_qua + this.id;
            in_gia_tri_moi(ket_qua)
        }
    })
}
//xóa số 0 đằng trc khi người dụng nhập số 0 ở đầu
function in_ket_qua(so) {
    if(so=="") {
        document.getElementById("gia-tri-moi").innerText = so;
    } else {
        document.getElementById("gia-tri-moi").innerText = Dinh_dang_chuoi_so(so);
    }
}
//thiet lap nut xoa het
let delete_all = document.getElementsByClassName('system');
for (var i = 0 ; i<delete_all.length;i++){
    delete_all[i].addEventListener('click',function (){
        if(this.id == "xoa_tat_ca"){
            in_gia_tri_moi("");
            in_gia_tri_cu("");
        }
    })
}
//thiet lap nut xoa tung so
var he_thong = document.getElementsByClassName('system');
for(var i=0; i < he_thong.length; i++) {
    he_thong[i].addEventListener('click', function() {
        if(this.id == "xoa_tat_ca") {
            in_gia_tri_moi("");
            in_gia_tri_cu("");
        }
        else if(this.id == "xoa_tung_so") {
            let ket_qua = Xoa_Dinh_dang_chuoi(lay_gia_tri_moi()).toString();
            if(ket_qua) {
                ket_qua = ket_qua.substr(0, ket_qua.length -1)
                in_ket_qua(ket_qua)
            }
        }
        //thiet lap phep tinh 2 so
        else {
            var ket_qua = lay_gia_tri_moi();
            var ket_qua_cu = lay_gia_tri_cu();
            if(ket_qua != "" ) {
                ket_qua = Xoa_Dinh_dang_chuoi(ket_qua);
                ket_qua_cu =ket_qua_cu + ket_qua;
                if(this.id == "=") {
                    var ket_qua_cuoi = eval(ket_qua_cu);
                    in_ket_qua(ket_qua_cuoi);
                    in_gia_tri_cu("");
                } else {
                    ket_qua_cu = ket_qua_cu + this.id;
                    in_gia_tri_cu(ket_qua_cu);
                    in_gia_tri_moi("");
                }
            }
        }
    })
}

//pr5:
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
setInterval(()=>{
    let day = new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes() *deg;
    let ss = day.getSeconds() *deg;
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)}deg)`;
    sc.style.transform = `rotateZ(${(ss)}deg)`;
})
