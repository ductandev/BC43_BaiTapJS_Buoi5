// ----------------------------------
// BÀI TẬP 1: Quản lý tuyển sinh.
// ----------------------------------
/**
 * Hàm này dùng để tính điểm tổng tất cả các môn và điểm cộng của đối tượng, khu vực.
 * @param {*} monThu1 : Điểm môn thi thứ 1
 * @param {*} monThu2 : Điểm môn thi thứ 1
 * @param {*} monThu3 : Điểm môn thi thứ 3
 * @param {*} khuVuc  : Điểm cộng của khu vực
 * @param {*} doiTuong : Điểm cộng của đối tượng
 * @returns Hàm trả về tổng điểm 3 môn thi và điểm cộng của đối tượng, khu vực
 */
function tinhDiemTong(monThu1, monThu2, monThu3, khuVuc, doiTuong) {
    var tongDiem = 0;
    tongDiem = monThu1 + monThu2 + monThu3 + khuVuc + doiTuong;

    return tongDiem;
}

/**
 * Hàm Dùng để kiểm tra kết quả đậu hay rớt
 * @param {*} diemMonThi1 : Điểm môn thi thứ 1
 * @param {*} diemMonThi2 : Điểm môn thi thứ 2
 * @param {*} diemMonThi3 : Điểm môn thi thứ 3
 * @param {*} diemTong    : Điểm tổng tất cả các môn và điểm cộng của đối tượng, khu vực
 * @returns Hàm trả về kết quả đậu hoặc rớt và điểm tổng để hiển thị trên giao diện web
 */
function kiemTraDauRot(diemMonThi1, diemMonThi2, diemMonThi3, diemTong) {
    if (diemMonThi1 != 0 && diemMonThi2 != 0 && diemMonThi3 != 0) {
        if (diemTong >= diemChuan) {
            ketQuaBai1 = "Bạn đã đậu." + " Tổng điểm: " + diemTong;
        } else {
            ketQuaBai1 = "Bạn đã rớt." + " Tổng điểm: " + diemTong;
        }
    } else {
        ketQuaBai1 = "Bạn đã rớt. Do có điểm môn thi bằng 0.";
    }

    return ketQuaBai1;
}


// ----------------------------------
// BÀI TẬP 2: Tính tiền điện.
// ----------------------------------
/**
 * Hàm này dùng để tính tiền điện
 * @param {*} nhapSoKw : Số kw điện mà dười dùng nhập vào
 * @returns Trả về tổng số tiền điện của người dùng.
 */
function tinhTienDien(SoKw) {
    var tongTienDien = 0;

    if (0 < SoKw && SoKw <= 50) {
        tongTienDien = SoKw * 500;
    } else if (SoKw > 50 && SoKw <= 100) {
        tongTienDien = (SoKw - 50) * 650 + 50 * 500;
    } else if (SoKw > 100 && SoKw <= 200) {
        tongTienDien = (SoKw - 100) * 850 + 50 * 650 + 50 * 500;
    } else if (SoKw > 200 && SoKw <= 350) {
        tongTienDien = (SoKw - 200) * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
    } else if (SoKw > 350) {
        tongTienDien =
            (SoKw - 350) * 1300 + 150 * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
    } else {
        alert("Số kw không hợp lệ! Vui lòng nhập lại");
    }


    return tongTienDien;
}


// --------------------------------------
// BÀI TẬP 3: Tính thuế thu nhập cá nhân.
// --------------------------------------
/**
 * Hàm này dùng để tính thuế thu nhập của cá nhân
 * @param {*} thuNhapChiuThue : Thu nhập chịu thuế được tính bằng công thức ở đề bài
 * @returns Trả về thuế thu nhập cá nhân phải trả.
 */
function tinhThueThuNhapCaNhan(thuNhapChiuThue) {
    var thueCaNhan = 0;

    if (thuNhapChiuThue <= 60e6) {
        thueCaNhan = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120e6) {
        thueCaNhan = (thuNhapChiuThue - 60e6) * 0.1 + 60e6 * 0.05;
    } else if (thuNhapChiuThue <= 210e6) {
        thueCaNhan = (thuNhapChiuThue - 120e6) * 0.15 + 60e6 * 0.1 + 60e6 * 0.05;
    } else if (thuNhapChiuThue <= 384e6) {
        thueCaNhan = (thuNhapChiuThue - 210e6) * 0.2 + 90e6 * 0.15 + 60e6 * 0.1 + 60e6 * 0.05;
    } else if (thuNhapChiuThue <= 624e6) {
        thueCaNhan = (thuNhapChiuThue - 384e6) * 0.25 + 174e6 * 0.2 + 90e6 * 0.15 + 60e6 * 0.1 + 60e6 * 0.05;
    } else if (thuNhapChiuThue <= 960e6) {
        thueCaNhan = (thuNhapChiuThue - 624e6) * 0.3 + 240e6 * 0.25 + 174e6 * 0.2 + 90e6 * 0.15 + 60e6 * 0.1 + 60e6 * 0.05;
    } else {
        thueCaNhan = (thuNhapChiuThue - 960e6) * 0.35 + 336e6 * 0.3 + 240e6 * 0.25 + 174e6 * 0.2 + 90e6 * 0.15 + 60e6 * 0.1 + 60e6 * 0.05;
    }

    return thueCaNhan;
}


// --------------------------------------
// BÀI TẬP 4: Tính tiền cáp 
// --------------------------------------
/**
 * Hàm Tính Tiền Cáp Của khách hàng.
 * @param {*} loaiKhachHang : Loại khách hàng là 'user' or 'customer'.
 * @param {*} soKenhCaoCap  : Số kênh cao cấp.
 * @param {*} soKetNoi      : Số kết nối.
 * @returns Hàm trả về tổng tiền cáp dựa vào loại khách hàng.
 */
function tinhHoaDonTienCap(loaiKhachHang, soKenhCaoCap, soKetNoi) {
    var TienCap = 0;

    if (loaiKhachHang === 'user')
        TienCap = 4.5 + 20.5 + 7.5 * soKenhCaoCap
    else if (loaiKhachHang === 'company') {
        if (soKetNoi >= 0 && soKetNoi <= 10) {
            TienCap = 15 + 75 + 50 * soKenhCaoCap
        }
        else {
            TienCap = 15 + 75 + (soKetNoi - 10) * 5 + 50 * soKenhCaoCap
        }
    }
    else {
        alert('Vui lòng chọn loại khách hàng!')
    }

    return TienCap;
}