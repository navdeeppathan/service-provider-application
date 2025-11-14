import React, { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginSignupAnimation() {
  const [isActive, setIsActive] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();
  const showSignup = () => {
    setShowLogin(false);
    setTimeout(() => setIsActive(true), 50);
  };

  const showLoginForm = () => {
    setIsActive(false);
    setTimeout(() => setShowLogin(true), 50);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(120%);
            opacity: 0;
            filter: blur(10px);
          }
          to {
            transform: translateX(0);
            opacity: 1;
            filter: blur(0);
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(120%);
            opacity: 0;
            filter: blur(10px);
          }
        }

        .form-box.Register {
          animation: ${
            isActive
              ? "slideIn 0.7s ease forwards"
              : "slideOut 0.7s ease forwards"
          };
          transition: all 0.7s ease;
          opacity: ${isActive ? "1" : "0"};
          filter: ${isActive ? "blur(0)" : "blur(10px)"};
        }

        .container.active .form-box.Register {
          transform: translateX(0);
          opacity: 1;
          filter: blur(0);
          transition-delay: calc(.1s * var(--li));
        }

        .input-group {
          margin-bottom: 1.5rem;
        }

        .input-wrapper {
          position: relative;
          margin-bottom: 1.5rem;
        }

        // .input-wrapper input {
        //   width: 100%;
        //   background: linear-gradient(180deg, #4AA8FF 0%, #2D8CFF 100%);
        //   border: none;
        //   border-bottom: 2px solid rgba(255, 255, 255, 0.2);
        //   padding: 1rem ;
        //   color: white;
        //   font-size: 1rem;
        //   transition: all 0.3s ease;
        //   border-radius: 30px;
          
        // }

        // .input-wrapper input:focus {
        //   outline: none;
        //   border-bottom-color: #ff6b35;
        //   background: rgba(255, 255, 255, 0.05);
        // }

        // .input-wrapper input::placeholder {
        //   color: rgba(255, 255, 255, 0.5);
        // }

        .input-wrapper input {
  width: 100%;
  background: linear-gradient(180deg, #4AA8FF 0%, #2D8CFF 100%);
  border: none;
  padding: 1rem;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  border-radius: 30px;
}

/* Focus effect with border glow + keeps gradient */
.input-wrapper input:focus {
  outline: none;
  box-shadow: 0 0 8px rgba(66, 153, 225, 0.8); /* subtle glow */
  border: 2px solid rgba(255, 255, 255, 0.35);
}

/* Placeholder */
.input-wrapper input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

/* Optional: stronger typing visibility */
.input-wrapper input:not(:placeholder-shown) {
  background: linear-gradient(180deg, #3294ff 0%, #1f7eff 100%);
}


        .input-icon {
          position: absolute;
          right: 0.5rem;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.5);
        }

        .login-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(180deg, #4AA8FF 0%, #2D8CFF 100%);
          border: none;
          border-radius: 50px;
          color: white;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(255, 107, 53, 0.4);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .login-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(255, 107, 53, 0.5);
          background: linear-gradient(135deg, #f7931e 0%, #ff6b35 100%);
        }

        .login-btn:active {
          transform: translateY(0);
        }

        .toggle-text {
          text-align: center;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
          margin-top: 2rem;
        }

        .toggle-link {
          color: #000;
          cursor: pointer;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .toggle-link:hover {
          color: #f7931e;
          text-decoration: underline;
        }
      `}</style>

      <div className="w-full max-w-5xl">
        <div className="container relative">
          <div className="relative bg-[#FFFFFF] rounded-2xl overflow-hidden  border border-[rgba(45,140,255,0.4)] shadow-[0_0_10px_rgba(45,140,255,0.6),0_0_20px_rgba(45,140,255,0.4),0_0_40px_rgba(45,140,255,0.3),0_0_80px_rgba(45,140,255,0.2)]">
            <div className="grid md:grid-cols-2 min-h-[550px] relative">
              {/* Login Form */}
              <div
                className={`form-box Login p-8 md:p-12 flex flex-col justify-center transition-all duration-700 absolute md:relative inset-0 ${
                  !showLogin ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
                style={{
                  transform: showLogin ? "translateX(0)" : "translateX(-120%)",
                  filter: showLogin ? "blur(0)" : "blur(10px)",
                  zIndex: showLogin ? 2 : 1,
                }}
              >
                <h2 className="text-[#000000] text-4xl font-bold mb-10 tracking-wide">
                  Login
                </h2>

                <div className="input-wrapper" style={{ "--li": 0 }}>
                  <input type="text" placeholder="Username" />
                  <User className="input-icon" size={20} />
                </div>

                <div className="input-wrapper" style={{ "--li": 1 }}>
                  <input type="password" placeholder="Password" />
                  <Lock className="input-icon" size={20} />
                </div>

                <button
                  onClick={() => navigate("/home")}
                  className="login-btn"
                  style={{ "--li": 2 }}
                >
                  Login
                </button>

                <div className="toggle-text" style={{ "--li": 3 }}>
                  Don't have an account?{" "}
                  <span className="toggle-link" onClick={showSignup}>
                    Sign Up
                  </span>
                </div>
              </div>

              {/* Register Form */}
              <div
                className={`form-box Register p-8 md:p-12 flex flex-col justify-center transition-all duration-700 absolute md:relative inset-0 ${
                  isActive && !showLogin
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
                style={{
                  transform:
                    isActive && !showLogin
                      ? "translateX(0)"
                      : "translateX(120%)",
                  filter: isActive && !showLogin ? "blur(0)" : "blur(10px)",
                  zIndex: !showLogin ? 2 : 1,
                }}
              >
                <h2 className="text-[#000000] text-4xl font-bold mb-10 tracking-wide">
                  Register
                </h2>

                <div className="input-wrapper" style={{ "--li": 0 }}>
                  <input type="text" placeholder="Username" />
                  <User className="input-icon" size={20} />
                </div>

                <div className="input-wrapper" style={{ "--li": 1 }}>
                  <input type="email" placeholder="Email" />
                  <Mail className="input-icon" size={20} />
                </div>

                <div className="input-wrapper" style={{ "--li": 2 }}>
                  <input type="password" placeholder="Password" />
                  <Lock className="input-icon" size={20} />
                </div>

                <button className="login-btn" style={{ "--li": 3 }}>
                  Register
                </button>

                <div className="toggle-text" style={{ "--li": 4 }}>
                  Already have an account?{" "}
                  <span className="toggle-link" onClick={showLoginForm}>
                    Sign in
                  </span>
                </div>
              </div>

              {/* Info Panel - Login */}
              <div
                className={`bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-8 md:p-10 hidden md:flex flex-col  items-end text-right transition-all duration-700 absolute inset-0 ${
                  !showLogin ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  pointerEvents: !showLogin ? "none" : "auto",
                  clipPath: !showLogin
                    ? "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
                    : "polygon(25% 0, 100% 0, 100% 110%, 39% 20%)",
                  zIndex: showLogin ? 1 : 0,
                }}
              >
                <div className="max-w-sm">
                  <h2 className="text-white text-5xl font-black mb-3 tracking-tight leading-tight">
                    WELCOME
                    <br />
                    BACK!
                  </h2>
                  <p className="text-white  text-opacity-95 text-base leading-relaxed font-light">
                    We are happy to have <br /> you with us again. If <br /> you
                    need anything, we <br /> are here to help.
                  </p>
                </div>
              </div>

              {/* Info Panel - Register */}
              <div
                className={`bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-8 md:p-12 hidden md:flex flex-col  items-start text-left transition-all duration-700 absolute inset-0 ${
                  isActive && !showLogin ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  pointerEvents: isActive && !showLogin ? "auto" : "none",
                  clipPath:
                    isActive && !showLogin
                      ? "polygon(0 0, 50% 0, 100% -80%, 0% 120%)"
                      : "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                  zIndex: !showLogin ? 1 : 0,
                }}
              >
                <div className="max-w-sm">
                  <h2 className="text-white text-5xl font-black mb-3 tracking-tight leading-tight">
                    WELCOME!
                  </h2>
                  <p className="text-white text-opacity-95 text-base leading-relaxed font-light">
                    We're delighted to <br /> have you here. If you <br /> need
                    any assistance,
                    <br /> feel free to reach out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
