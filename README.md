### Sự khác nhau giữa Virtual DOM và Real DOM?
- **Real DOM:** DOM (Document Object Model) đại diện cho giao diện người dùng trong web để có thay đổi như cấu trúc của web, style, nội dung của web. Mỗi khi có sự thay đổi về trạng thái của giao diện người dùng, DOM sẽ cập nhật để thể hiện sự thay đổi đó. 
- **Virtual DOM:** là DOM ảo, đại diện ảo cho DOM thật. Mỗi khi có sự thay đổi về trạng thái của giao diện thì DOM ảo sẽ được cập thay vì DOM thật. Khi cập nhật trạng thái, một DOM ảo mới được tạo ra và so sánh với phiên bản trước của DOM ảo trước đó, rồi mang những phần tử thay đổi cập nhật vào DOM thật.
![](https://i2.wp.com/programmingwithmosh.com/wp-content/uploads/2018/11/lnrn_0201.png?w=1173&ssl=1)

### Tại sao phải có unique khi render 1 list?

- Khi render một list cần có key vì đây chính cách để ứng dụng phân biệt các phần tử khi render, xem các phần tử nào được thêm mới, phần tử nào thay đổi, phần tử nào giữ nguyên hoặc xoá bỏ để re-render các đối tượng đấy, giữ nguyên các đối tượng còn lại, nâng cao hiệu suất của ứng dụng.
