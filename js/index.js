// *************************************************************
//                  BÀI TẬP 1: Quản lý tuyển sinh.             *
// *************************************************************
document.getElementById("btnBai1").onclick = function () {
    /* Input:   diemChuan(number),
                chonKhuVuc(value number),
                chonDoiTuong(value number),
                diemMonThu1(number),
                diemMonThu2(number),
                diemMonThu3(number),*/
    var diemChuan = +document.getElementById("diemChuan").value;
    var chonKhuVuc = +document.getElementById("chonKhuVuc").value;
    var chonDoiTuong = +document.getElementById("chonDoiTuong").value;
    var diemMonThu1 = +document.getElementById("diemMonThu1").value;
    var diemMonThu2 = +document.getElementById("diemMonThu2").value;
    var diemMonThu3 = +document.getElementById("diemMonThu3").value;

    // Output: diemTong(number), ketQuaBai1 (string)
    var diemTong = 0;
    var ketQuaBai1 = "";

    // Process:
    diemTong = tinhDiemTong(diemMonThu1, diemMonThu2, diemMonThu3, chonKhuVuc, chonDoiTuong);
    if (diemChuan <= 30) {
        if (diemMonThu1 <= 10 && diemMonThu2 <= 10 && diemMonThu3 <= 10) {
            ketQuaBai1 = kiemTraDauRot(diemMonThu1, diemMonThu2, diemMonThu3,diemTong);
        } else {
            alert("Vui lòng nhập lại! Điểm môn thi phải bé hơn hoặc bằng 10");
        }
    } else {
        alert("Vui lòng nhập lại! Điểm chuẩn bé hơn hoặc bằng 30.");
    }

    document.getElementById("ketQuaBai1").innerHTML = ketQuaBai1;
};

// *************************************************************
//                  BÀI TẬP 2: Tính tiền điện.                 *
// *************************************************************
document.getElementById("btnBai2").onclick = function () {
    // Input: nhapHoTen_Bai2(string), nhapSoKw(number)
    var nhapHoTen_Bai2 = document.getElementById("nhapHoTen_Bai2").value;
    var nhapSoKw = document.getElementById("nhapSoKw").value;

    // Output: tongTienDien (number)
    var tongTienDien = 0;

    // Process:
    if (nhapHoTen_Bai2 != "") {
        tongTienDien = tinhTienDien(nhapSoKw);
    } else {
        alert("Vui lòng nhập họ tên!");
    }

    document.getElementById("ketQuaBai2").innerHTML =
        "Họ tên: " +
        nhapHoTen_Bai2 +
        "; " +
        "Tiền điện: " +
        tongTienDien.toLocaleString() +
        " Vnđ";
};

// *************************************************************
//             BÀI TẬP 3: Tính thuế thu nhập cá nhân.          *
// *************************************************************
document.getElementById("btnBai3").onclick = function () {
    /* Input:   nhapHoTen_Bai3(string), 
                tongThuNhapNam(number), 
                soNguoiPhuThuoc(number)*/
    var nhapHoTen_Bai3 = document.getElementById("nhapHoTen_Bai3").value;
    var tongThuNhapNam = +document.getElementById("tongThuNhapNam").value;
    var soNguoiPhuThuoc = +document.getElementById("soNguoiPhuThuoc").value;

    // Output: thuNhapChiuThue(number), thueThuNhapCaNhan(number)
    var thuNhapChiuThue = 0;
    var thueThuNhapCaNhan = 0;

    // Process:
    thuNhapChiuThue = tongThuNhapNam - 4e6 - soNguoiPhuThuoc * 1.6e6;
    if (thuNhapChiuThue > 0) {
        thueThuNhapCaNhan = tinhThueThuNhapCaNhan(thuNhapChiuThue);
    } else {
        alert("Số tiền thu nhập không hợp lệ! \nVui lòng nhập lại.");
    }

    document.getElementById("ketQuaBai3").innerHTML =
        "Họ tên: " +
        nhapHoTen_Bai3 +
        "; " +
        "Tiền thuế thu nhập cá nhân: " +
        thueThuNhapCaNhan.toLocaleString() +
        " VND";
};

// *************************************************************
//                  BÀI TẬP 4: Tính tiền cáp                   *
// *************************************************************
// Hiển thị hoặc ẩn input.
var showInput = document.querySelector("#loaiKhachHang");

showInput.addEventListener("change", (event) => {
    const inputKetnoi = document.querySelector("#soKetNoi");

    console.log("event.target.value", event.target.value);
    if (event.target.value === "user") {
        inputKetnoi.classList.add("d-none");
    } else if (event.target.value === "company") {
        inputKetnoi.classList.remove("d-none");
    }
});

document.getElementById("btnBai4").onclick = function () {
    /* Input:   loaiKhachHang(string) 
                maKhachHang(string) 
                soKenhCaoCap(number
                soKetNoi(number)*/
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var maKhachHang = document.getElementById("maKhachHang").value;
    var soKenhCaoCap = +document.getElementById("soKenhCaoCap").value;
    var soKetNoi = +document.getElementById("soKetNoi").value;

    // Output: hoaDonTienCap(number)
    hoaDonTienCap = 0;

    // Process:
    hoaDonTienCap = tinhHoaDonTienCap(loaiKhachHang, soKenhCaoCap, soKetNoi);

    document.getElementById("ketQuaBai4").innerHTML =
        "Mã khách hàng: " +
        maKhachHang +
        "; " +
        "Tiền cáp: " +
        hoaDonTienCap.toLocaleString("en-US", {style:"currency", currency:"USD"});
};
