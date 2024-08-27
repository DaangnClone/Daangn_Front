import React from "react";
import { ReactComponent as Daangnlogo } from "../assets/logo/daangnlogo.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper function to check if the path is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="header-container">
      <div className="header-title-container">
        {/* Logo Section */}
        <div className="header-main" onClick={() => navigate("/")}>
          <Daangnlogo />
        </div>

        {/* Navigation Links */}
        <div className="header-title-list-container">
          <div
            className={`header-trade ${isActive("/trade") ? "active" : ""}`}
            onClick={() => navigate("/trade")}
          >
            중고거래
          </div>
          <div
            className={`header-localbusiness ${
              isActive("/localbusiness") ? "active" : ""
            }`}
            onClick={() => navigate("/localbusiness")}
          >
            동네업체
          </div>
          <div
            className={`header-partjob ${isActive("/partjob") ? "active" : ""}`}
            onClick={() => navigate("/partjob")}
          >
            알바
          </div>
          <div
            className={`header-realty ${isActive("/realty") ? "active" : ""}`}
            onClick={() => navigate("/realty")}
          >
            부동산
          </div>
          <div
            className={`header-cardirect ${
              isActive("/cardirect") ? "active" : ""
            }`}
            onClick={() => navigate("/cardirect")}
          >
            중고차 직거래
          </div>
        </div>

        <div className="header-chat-container">
          <div className="header-chat-search-container">
            <input
              className="header-chat-search"
              placeholder="물품이나 동네를 검색해보세요"
            />
          </div>
          <div className="header-chat" onClick={() => navigate("/chat")}>
            채팅하기
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
