# Sử dụng hình ảnh Node.js 18.16 làm hình ảnh cơ sở
FROM node:18.16

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các gói phụ thuộc
RUN npm install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Build ứng dụng React
RUN npm run build
# RUN npm install -g serve



# Khai báo cổng mặc định mà ứng dụng chạy trên container
EXPOSE 3001

# Khởi chạy ứng dụng React
# CMD ["npx", "serve", "-s", "build", "-p", "3001"]
CMD ["npm", "start"]
