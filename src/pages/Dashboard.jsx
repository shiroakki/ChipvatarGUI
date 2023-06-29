


// export default function Dashboard() {
//   return (
//     <div>Dashboard</div>
//   )
// }
import React from "react";
import VectorImage from "src/assets/images/_Vector.png";
import Vector1Image from "src/assets/images/_Vector.png";
import { styled } from "@mui/material/styles";
import Frame48095793 from "src/components/Frame48095793/Frame48095793";
import Dashboard from "src/components/Dashboard/Dashboard";
import Icon from "src/components/Icon/Icon";
import BulletText from "src/components/BulletText/BulletText";
import Button from "src/components/Button/Button";

const Q1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1512px`,
  height: `982px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Frame48095793 = styled(Frame48095793)({
  alignSelf: `stretch`,
  width: `104px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Frame48095943 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `408px`,
  left: `160px`,
  top: `72px`,
  width: `1280px`,
});

const Frame48095755 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px 1px`,
  boxSizing: `border-box`,
  width: `1280px`,
  margin: `0px`,
  height: `32px`,
});

const Frame48095635 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  height: `32px`,
  width: `90px`,
});

const Home = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(24, 24, 24, 1)`,
  fontStyle: `normal`,
  fontFamily: `PingFang SC`,
  fontWeight: `600`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `32px`,
  textTransform: `none`,
  margin: `0px`,
});

const Q2 = styled("div")({
  backgroundColor: `rgba(243, 243, 243, 0.5)`,
  border: `1px solid rgba(223, 223, 223, 1)`,
  boxSizing: `border-box`,
  borderRadius: `8px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `29px 59px`,
  height: `239px`,
  width: `528px`,
  margin: `37px 0px 0px 0px`,
  overflow: `hidden`,
});

const Frame48095651 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `114px`,
  margin: `0px`,
  height: `102px`,
});

const Frame48095618 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  height: `58px`,
  width: `146px`,
});

const PlusBox = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `32px`,
  width: `32px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector = styled("img")({
  height: `24px`,
  width: `24px`,
  position: `absolute`,
  left: `4px`,
  top: `4px`,
});

const IconButton = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `4px 0px 0px 0px`,
  height: `22px`,
  width: `146px`,
});

const Shangchuan1 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector1 = styled("img")({
  height: `15px`,
  width: `15px`,
  position: `absolute`,
  left: `3px`,
  top: `2px`,
});

const AddNewChip = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(64, 114, 246, 1)`,
  fontStyle: `normal`,
  fontFamily: `PingFang SC`,
  fontWeight: `500`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `22px`,
  textTransform: `none`,
  margin: `0px 0px 0px 4px`,
});

const Frame48095647 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `16px 0px 0px 0px`,
  height: `28px`,
  width: `170px`,
});

const ConnectChipWithPower = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(166, 166, 166, 1)`,
  fontStyle: `normal`,
  fontFamily: `PingFang SC`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `14px`,
  textTransform: `none`,
  margin: `0px`,
});

const Frame48095944 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1408px`,
  height: `982px`,
  left: `104px`,
  top: `0px`,
});

const Rectangle521 = styled("div")({
  backgroundColor: `rgba(0, 0, 0, 0.3)`,
  width: `1408px`,
  height: `982px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Q3 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 4px 26px rgba(116, 137, 216, 0.1)`,
  borderRadius: `12px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `45px 56px`,
  boxSizing: `border-box`,
  width: `640px`,
  height: `333px`,
  left: `480px`,
  top: `297px`,
  overflow: `hidden`,
});

const Q4 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
  height: `32px`,
  width: `528px`,
});

const Frame48095620 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  overflow: `hidden`,
  height: `32px`,
  width: `173px`,
});

const Q5 = styled(Q)({
  width: `32px`,
  height: `32px`,
  margin: `0px`,
});

const DetectedChip = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(24, 24, 24, 1)`,
  fontStyle: `normal`,
  fontFamily: `PingFang SC`,
  fontWeight: `600`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `28px`,
  textTransform: `none`,
  margin: `0px 0px 0px 4px`,
});

const Icon = styled(Icon)({
  width: `32px`,
  height: `32px`,
  margin: `0px`,
});

const Frame48095721 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `608px`,
  margin: `25px 0px 0px 0px`,
  height: `78px`,
});

const Frame48095719 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  height: `78px`,
  width: `235px`,
});

const BulletText = styled(BulletText)({
  margin: `0px`,
});

const BulletText1 = styled(BulletText)({
  margin: `6px 0px 0px 0px`,
});

const BulletText2 = styled(BulletText)({
  margin: `6px 0px 0px 0px`,
});

const Frame48095720 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `277px`,
  margin: `0px 0px 0px 14px`,
  height: `22px`,
});

const BulletText3 = styled(BulletText)({
  margin: `0px`,
});

const Frame48095723 = styled("div")({
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-end`,
  height: `22px`,
  width: `528px`,
  margin: `25px 0px 0px 0px`,
});

const Frame48095724 = styled("div")({
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-end`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `528px`,
  margin: `25px 0px 0px 0px`,
  height: `32px`,
});

const Frame48095722 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
  height: `32px`,
  width: `528px`,
});

const Frame48095625 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  height: `32px`,
  width: `248px`,
});

const Button = styled(Button)({
  width: `117px`,
  height: `32px`,
  margin: `0px`,
});

const Button1 = styled(Button)({
  width: `115px`,
  height: `32px`,
  margin: `0px 0px 0px 16px`,
});

function Dashboard() {
  return (
    <Q1>
      <Frame48095793 />
      <Frame48095943>
        <Frame48095755>
          <Frame48095635>
            <Home>{`Home`}</Home>
          </Frame48095635>
        </Frame48095755>
        <Q2>
          <Frame48095651>
            <Frame48095618>
              <PlusBox>
                <Vector src={VectorImage} loading="lazy" alt={"Vector"} />
              </PlusBox>
              <IconButton>
                <Shangchuan1>
                  <Vector1 src={Vector1Image} loading="lazy" alt={"Vector"} />
                </Shangchuan1>
                <AddNewChip>{`Add New Chip`}</AddNewChip>
              </IconButton>
            </Frame48095618>
            <Frame48095647>
              <ConnectChipWithPower>
                {`Connect Chip with 
Power Source and Laptop`}
              </ConnectChipWithPower>
            </Frame48095647>
          </Frame48095651>
        </Q2>
      </Frame48095943>
      <Frame48095944>
        <Rectangle521></Rectangle521>
      </Frame48095944>
      <Q3>
        <Q4>
          <Frame48095620>
            <Q5 />
            <DetectedChip>{`Detected Chip`}</DetectedChip>
          </Frame48095620>
          <Icon />
        </Q4>
        <Frame48095721>
          <Frame48095719>
            <BulletText />
            <BulletText1 />
            <BulletText2 />
          </Frame48095719>
          <Frame48095720>
            <BulletText3 />
          </Frame48095720>
        </Frame48095721>
        <Frame48095723></Frame48095723>
        <Frame48095724>
          <Frame48095722>
            <Frame48095625>
              <Button />
              <Button1 />
            </Frame48095625>
          </Frame48095722>
        </Frame48095724>
      </Q3>
    </Q1>
  );
}

export default Q;

  