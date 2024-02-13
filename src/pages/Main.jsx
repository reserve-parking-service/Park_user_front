import "../styles/main.css";
import { Input, Select, Option, Button } from "@material-tailwind/react";
const Main = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mainImg">
          <div className="flex booking">
            <div className="w-72">
              <Input label="주차장 검색" />
            </div>
            <div className="w-72">
              <Input type="date" label="날짜" />
            </div>
            <div className="w-50">
              <Input type="time" label="시작 시간" />
            </div>
            <div className="w-50">
              <Input type="time" label="종료 시간" />
            </div>
            <div className="w-72">
              <Select label="차 종류">
                <Option>소형차</Option>
                <Option>중형차</Option>
                <Option>대형차</Option>
              </Select>
            </div>
            <Button className="main-btn">주차 공간 검색</Button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Main;
