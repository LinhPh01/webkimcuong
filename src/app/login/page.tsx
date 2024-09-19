"use client";
// pages/login.tsx
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Thực hiện xác thực tại đây (ví dụ: gọi API để xác thực)
    if (username === "admin" && password === "password") {
      // Thay đổi điều kiện xác thực theo yêu cầu
      router.push("/admin");
    } else {
      alert("Sai tên đăng nhập hoặc mật khẩu");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 bg-white custom-shadow rounded-xl">
        <h1 className="text-2xl font-bold mb-4">Đăng nhập</h1>
        <input
          type="text"
          placeholder="Username"
          className="border p-2 mb-4 w-full rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-4 w-full rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
