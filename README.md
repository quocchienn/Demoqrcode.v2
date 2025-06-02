# 🧾 Demo QR Code v2 - Tạo mã QR thanh toán ngân hàng siêu tiện lợi

**Chào anh em!**  
Lại là mình đây 😄 Lần này mình đã **update thêm một số tính năng mới nho nhỏ** và **sửa lại theo góp ý trước đó**.  
Mong anh em test lại và trải nghiệm thử, nhớ cho mình xin ít feedback để cải thiện thêm nhé!

🧪 **Trải nghiệm trực tiếp**: [http://taoqrcode.infy.uk/](http://taoqrcode.infy.uk/)  
🧑‍💻 **Source code GitHub**: [https://github.com/quocchienn/Demoqrcode.v2](https://github.com/quocchienn/Demoqrcode.v2)

---

## 🔧 Các chức năng chính:

### 1. ✅ Tạo mã QR thanh toán
- Chọn **ngân hàng** (46 ngân hàng, có logo & tìm kiếm).
- Nhập **tên người nhận** (tùy chọn), **số tài khoản** (bắt buộc), **số tiền (VNĐ)** (tự động định dạng), và **nội dung**.
- Chọn **kích thước QR** (Nhỏ / Vừa / Lớn) và **định dạng** (PNG / SVG).
- Tạo mã QR thông qua **VietQR API**, hiển thị tương ứng.

### 2. 👀 Xem trước thông tin QR
- Hiển thị thông tin đã nhập: ngân hàng, tên, STK, số tiền, nội dung, kích thước, định dạng.
- **Cập nhật thời gian thực** theo input.

### 3. 📥 Tải mã QR
- Hỗ trợ tải QR về với đúng định dạng `.png` hoặc `.svg`.
- Có **toast xác nhận tải thành công**.

### 4. 📋 Sao chép liên kết
- Copy link QR với 1 click.
- Toast thông báo **thành công/thất bại**.

### 5. 📤 Chia sẻ tiện lợi
- Chia sẻ thông tin QR qua **Email, WhatsApp, Telegram**.
- Nội dung tự động soạn sẵn: ngân hàng, tên, STK, số tiền, nội dung, URL QR.
- Mở ứng dụng chia sẻ kèm toast xác nhận.

### 6. 💾 Lưu mẫu thanh toán
- Lưu tối đa **10 mẫu ngân hàng + tên + STK** vào `localStorage`.
- Có thể tải mẫu để điền lại form.
- Hỗ trợ xóa toàn bộ mẫu.

### 7. 📜 Lịch sử mã QR đã tạo
- Lưu lại tối đa **10 mã QR** đã tạo gần nhất (gồm thông tin & thời gian).
- Có thể tải lại từ lịch sử.
- Xóa toàn bộ lịch sử nếu muốn.

### 8. 🎨 Giao diện đẹp mắt
- Giao diện **responsive** (desktop + mobile).
- Hiệu ứng nhẹ nhàng: **gradient nền, fade-in, tiêu đề glow, hover/click animation**.
- Mã QR hiển thị đẹp: **bo góc, đổ bóng, scale khi hover**.

### 9. 🛡️ Xử lý lỗi thông minh
- Kiểm tra input (bắt buộc có ngân hàng + STK).
- Thông báo lỗi khi API lỗi.
- `console.error` khi dropdown hay tải QR gặp lỗi.

### 10. ✨ Tính năng phụ hỗ trợ
- Tự động **định dạng số tiền** (dấu chấm ngăn cách).
- Cập nhật real-time QR & preview.
- Xóa ký tự không hợp lệ khỏi ô tiền.
- Hỗ trợ định dạng **SVG và PNG**.

---

## 📌 Góp ý & hỗ trợ
Mọi ý kiến đóng góp đều rất quý giá 🙏  
Bạn có thể mở Issue hoặc tạo Pull Request nếu muốn cải thiện thêm!

---

## 📄 License
MIT © [quocchienn](https://github.com/quocchienn)
