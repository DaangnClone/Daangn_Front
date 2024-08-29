import React from "react";
import { ReactComponent as Aapstore } from "../assets/applogo/appstore.svg";
import { ReactComponent as Insta } from "../assets/applogo/insta.svg";
import { ReactComponent as Facebook } from "../assets/applogo/facebook.svg";
import { ReactComponent as Blog } from "../assets/applogo/blog.svg";
import { ReactComponent as Youtube } from "../assets/applogo/youtube.svg";
import { ReactComponent as Googleplay } from "../assets/applogo/googleplay.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-line" />
      <div className="footer-content-container">
        <div className="footer-content-container-one">
          <div className="footer-content-one-one">중고거래</div>
          <div className="footer-content-one-two">동네업체</div>
          <div className="footer-content-one-three">당근알바</div>
          <div className="footer-content-one-four">부동산</div>
          <div className="footer-content-one-five">중고차직거래</div>
        </div>
        <div className="footer-content-container-two">
          <div className="footer-content-two-one">당근비즈니스</div>
          <div className="footer-content-two-two">채팅하기</div>
        </div>
        <div className="footer-content-container-third">
          <div className="footer-content-third-one">자주 묻는 질문</div>
          <div className="footer-content-third-two">회사 소개</div>
          <div className="footer-content-third-third">인재 채용</div>
        </div>
        <div className="footer-content-container-app">
          <div className="footer-content-container-app-title">
            당근 앱 다운로드
          </div>
          <div className="footer-content-container-app-icon">
            <div className="footer-content-app-container">
              <Aapstore />
            </div>
            <div className="footer-content-app-container">
              <Googleplay />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-container">
        <div className="footer-bottom-content-container">
          <div className="footer-container-bottom-line" />
          <div className="footer-bottom-detail-content">
            <div className="footer-bottom-container-top">
              <div className="footer-bottom-manual">
                <div className="footer-content-font">
                  <div className="footer-font-dark">(주) 당근마켓</div>|
                  <div className="footer-font-dark"> 대표</div> 홍길동 |
                  <div className="footer-font-dark">사업자번호</div>:000-00-0000
                </div>
                <div className="footer-content-font">
                  <div className="footer-font-dark">
                    직업정보제공사업 신고번호
                  </div>{" "}
                  00000000000000
                </div>
                <div className="footer-content-font">
                  <div className="footer-font-dark">통신판매업 신고번호</div>{" "}
                  0000-000초-0000
                </div>
                <div className="footer-content-font">
                  <div className="footer-font-dark">주소</div> 서울특별시 00구
                  0000로 000, 00층 (당근서비스)
                </div>
                <div className="footer-content-font">
                  <div className="footer-font-dark">전화</div> 0000-0000{" "}
                  <div className="footer-font-dark">고객문의</div>{" "}
                  000000000000.com
                </div>
              </div>
              <div className="footer-bottom-manual-icon">
                <div>
                  <Facebook />
                </div>
                <div>
                  <Insta />
                </div>
                <div>
                  <Youtube />
                </div>
                <div>
                  <Blog />
                </div>
                <div>언어 설정</div>
              </div>
            </div>
            <div className="footer-bottom-container-bottom">
              <div className="footer-bottom-container-bottom-requirement">
                <div className="footer-content-font">제휴 문의</div>
                <div className="footer-content-font">광고 문의</div>
                <div className="footer-content-font">PR 문의</div>
                <div className="footer-content-font">IR 문의</div>
              </div>
              <div className="footer-bottom-container-bottom-judgement">
                <div className="footer-content-font">이용 약관</div>
                <div className="footer-content-font">개인정보처리방침</div>
                <div className="footer-content-font">운영정책</div>
                <div className="footer-content-font">
                  위치기반서비스 이용약관
                </div>
                <div className="footer-content-font">
                  이용자보호 비전과 계획
                </div>
                <div className="footer-content-font">청소년보호정책</div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
