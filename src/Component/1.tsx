import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

const FrameChild = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: 50%;
  background: linear-gradient(228.67deg, #6e6cee, #3431ec 49%, #252395);
  flex-shrink: 0;
`;
const OutputProcessorInner = styled.div`
  margin-left: -917px;
  height: 1025px;
  width: 237px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 788px 0px 0px;
  box-sizing: border-box;
  flex-shrink: 0;
  @media screen and (max-width: 1350px) {
    padding-top: 512px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 925px) {
    padding-top: 333px;
    box-sizing: border-box;
  }
`;
const FrameItem = styled.div`
  width: 1930px;
  height: 709px;
  position: relative;
  border-radius: 0px 0px 240px 240px;
  background: linear-gradient(180deg, #6d6cee 18.07%, #6867ee);
  display: none;
  max-width: 100%;
  z-index: 0;
`;
const FrameInner = styled.img`
  height: 103.9px;
  width: 104px;
  position: relative;
  z-index: 3;
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 19px;
`;
const ThinkingAnd = styled.p`
  margin: 0;
`;
const ThinkingAndPlanningContainer = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: -1px;
  line-height: 61px;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  z-index: 3;
  @media screen and (max-width: 925px) {
    font-size: 49px;
    line-height: 49px;
  }
  @media screen and (max-width: 450px) {
    font-size: 37px;
    line-height: 37px;
  }
`;
const IntegerSuspendisseUrnaContainer = styled.div`
  position: relative;
  font-size: 16px;
  line-height: 22.4px;
  font-family: Inter;
  flex-shrink: 0;
  debug_commit: 1de1738;
  z-index: 3;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 19.8px;
  max-width: 100%;
`;
const Link = styled(Button)`
  width: 167px;
  height: 43px;
  z-index: 3;
`;
const GroupIcon = styled.img`
  width: 923.6px;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  bottom: 0px;
  left: -499px;
  max-height: 100%;
  object-fit: contain;
  z-index: 4;
`;
const LinkParent = styled.div`
  width: 424.6px;
  height: 916.6px;
  margin: 0 !important;
  position: absolute;
  bottom: -279.6px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 404px 69.6px 403.6px 70px;
  box-sizing: border-box;
`;
const RectangleParent = styled.div`
  align-self: stretch;
  border-radius: 0px 0px 240px 240px;
  background: linear-gradient(180deg, #6d6cee 18.07%, #6867ee);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 51px 188px 206.6px;
  box-sizing: border-box;
  position: relative;
  gap: 75.5px;
  max-width: 100%;
  z-index: 2;
  @media screen and (max-width: 925px) {
    gap: 38px;
    padding: 33px 94px 134px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: 19px;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
`;
const DivelementorWidgetContainer = styled.div`
  position: absolute;
  top: 260px;
  left: 0px;
  border-radius: 15px;
  border: 3px solid #6e6cee;
  box-sizing: border-box;
  width: 491.5px;
  height: 356px;
`;
const BusinessTeamInvestmentWorkiIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 16px;
  border-radius: 15px;
  width: 582.4px;
  height: 600px;
  overflow: hidden;
  object-fit: cover;
  z-index: 1;
`;
const DivelementorWidgetContainerParent = styled.div`
  height: 616px;
  width: 598.4px;
  position: absolute;
  margin: 0 !important;
  bottom: -550px;
  left: 273px;
`;
const Heading = styled.div`
  position: relative;
  letter-spacing: 1px;
  line-height: 22.4px;
  text-transform: uppercase;
  font-weight: 600;
`;
const Heading6SmartInvestingWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  max-width: 100%;
`;
const ListManager = styled.div`
  width: 1222px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 20px 0px 0px;
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  font-size: 14px;
  color: #6d6cee;
`;
const Information = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 273px;
  flex-shrink: 0;
  debug_commit: 1de1738;
  max-width: 100%;
  @media screen and (max-width: 1350px) {
    gap: 136px;
  }
  @media screen and (max-width: 925px) {
    gap: 68px;
  }
`;
const GroupIcon1 = styled.img`
  position: absolute;
  top: -150.1px;
  left: 492.8px;
  width: 841px;
  height: 873.1px;
  object-fit: contain;
  z-index: 1;
`;
const BusinesswomanLeadingAPresenIcon = styled.img`
  position: absolute;
  top: 175px;
  left: 0px;
  border-radius: 320px 0px 320px 320px;
  width: 640px;
  height: 640px;
  overflow: hidden;
  object-fit: contain;
  z-index: 3;
`;
const GroupParent = styled.div`
  height: 815px;
  width: 848px;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
`;
const OutputProcessorRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 680px;
  max-width: 100%;
  text-align: left;
  font-size: 61px;
  color: #fff;
  font-family: Outfit;
  @media screen and (max-width: 1825px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1350px) {
    gap: 340px;
  }
  @media screen and (max-width: 925px) {
    gap: 170px;
  }
  @media screen and (max-width: 450px) {
    gap: 85px;
  }
`;

const FrameComponent6: FunctionComponent = () => {
  return (
    <OutputProcessorRoot>
      <OutputProcessorInner>
        <FrameChild />
      </OutputProcessorInner>
      <Information>
        <RectangleParent>
          <FrameItem />
          <FrameWrapper>
            <FrameInner loading="lazy" alt="" src="/group-522.svg" />
          </FrameWrapper>
          <Description>
            <ThinkingAndPlanningContainer>
              <ThinkingAnd>Thinking and</ThinkingAnd>
              <ThinkingAnd>planning for your</ThinkingAnd>
              <ThinkingAnd>Future</ThinkingAnd>
            </ThinkingAndPlanningContainer>
            <IntegerSuspendisseUrnaContainer>
              <ThinkingAnd>
                Integer suspendisse urna arcu semper tristique nostra sit
                euismod
              </ThinkingAnd>
              <ThinkingAnd>
                laoreet himenaeos. Congue netus eget velit letius hendrerit erat
              </ThinkingAnd>
              <ThinkingAnd>ultrices conubia mattis.</ThinkingAnd>
            </IntegerSuspendisseUrnaContainer>
          </Description>
          <LinkParent>
            <Link
              disableElevation={true}
              variant="contained"
              sx={{
                color: "#fff",
                fontSize: "13",
                background: "linear-gradient(104.44deg, #4542fa, #0400ff)",
                borderRadius: "30px",
                "&:hover": {
                  background: "linear-gradient(104.44deg, #4542fa, #0400ff)",
                },
                width: 167,
                height: 43,
              }}
            >
              Discover more
            </Link>
            <GroupIcon alt="" src="/group@2x.png" />
          </LinkParent>
        </RectangleParent>
        <ListManager>
          <DivelementorWidgetContainerParent>
            <DivelementorWidgetContainer />
            <BusinessTeamInvestmentWorkiIcon
              loading="lazy"
              alt=""
              src="/businessteaminvestmentworkingwithcomputerjpg@2x.png"
            />
          </DivelementorWidgetContainerParent>
          <Heading6SmartInvestingWrapper>
            <Heading>Smart PUBLIC OFFERING</Heading>
          </Heading6SmartInvestingWrapper>
        </ListManager>
      </Information>
      <GroupParent>
        <GroupIcon1 alt="" src="/group-1@2x.png" />
        <BusinesswomanLeadingAPresenIcon
          alt=""
          src="/businesswomanleadingapresentationinloftofficejpg@2x.png"
        />
      </GroupParent>
    </OutputProcessorRoot>
  );
};

export default FrameComponent6;
