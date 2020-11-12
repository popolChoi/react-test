import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import Tset from "./test";

import { Route as Layout } from "./layout";
import { Route as ScrollEvent } from "./scrollEvent";
import { Route as DataGrid } from "./dataGrid";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const component_list = [
  {
    name: false,
    path: "/home",
    component : () => <div>내용 맹무</div>,
  },
  {
    name: 'scrollEvent',
    path: "/scrollEvent",
    component : () => <div><ScrollEvent /></div>,
  },
   {
    name: 'dataGrid',
    path: "/dataGrid",
    component : () => <div><DataGrid /></div>,
  },

  {
    name: 'router1',
    path: "/router1",
    component : () => <div className="table-row ">
        <table className="ui table col-10">
          <thead>
            <tr>
              <th>일자</th>
              <th>공장공정</th>
              <th>주문품명코드</th>
              <th>규격약호</th>
              <th>주문용도코드</th>
              <th>출강목표번호</th>
              <th>제품보증번호</th>
              <th>제품주문두께</th>
              <th>품질설계1열연</th>
              <th>변경관리번호</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan="10"
                className="center"
                style={{ height: 'calc(25px * 20)' }}
              >
                데이터가 없습니다.
              </td>
            </tr>
          </tbody>
        </table>
      </div>,
  },
  {
    name: 'router2',
    path: "/router2",
    component : () => (<React.Fragment>

      <div className="table-row ">
          <table className="ui table center">
            <thead>
              <tr>
                <th rowSpan="3">번호</th>
                <th colSpan="10">Strip 온도</th>
                <th rowSpan="2" colSpan="3">
                  중앙 SPEED
                </th>
              </tr>
              <tr>
                <th>NOF</th>
                <th>RHS</th>
                <th>ESS</th>
                <th colSpan="5">SJCS</th>
                <th>RJCS</th>
                <th rowSpan="2">DRY</th>
              </tr>
              <tr>
                <th>1</th>
                <th>1</th>
                <th>1</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>1</th>
                <th>MIN</th>
                <th>MAX</th>
                <th>AVG</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>

        {/* // <Divider
        //   horizontal
        //   style={{ margin: '1rem 0 0.5rem', fontSize: '14px' }}
        // >
        //   Case 2 : 가로형
        // </Divider> */}

        <div className="table-row">
          <table className="ui table">
            <colgroup>
              <col span="7" className="pw-12" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>재료 재질기호</th>
                <td>BTTVM40AA6</td>
                <th rowSpan="3">
                  제품
                  <br />
                  SIZE
                </th>
                <th className="grey-bg lighten-5">두께</th>
                <td>0.32</td>
                <th colSpan="3">Coil 내경/외경</th>
                <td>0</td>
              </tr>
              <tr>
                <th>검사기관</th>
                <td>A01</td>
                <th className="grey-bg lighten-5">폭</th>
                <td>710.7</td>
                <th rowSpan="2">
                  제품
                  <br />
                  열처리
                </th>
                <th className="grey-bg lighten-5">기준</th>
                <th className="grey-bg lighten-5">행제목</th>
                <td>0.32</td>
              </tr>
              <tr>
                <th>용도</th>
                <td>X8GS</td>
                <th className="grey-bg lighten-5">길이</th>
                <td>7,420</td>
                <th className="grey-bg lighten-5">실적</th>
                <th className="grey-bg lighten-5">행제목</th>
                <td>710.7</td>
              </tr>
              <tr>
                <th>제품진도(현/전)</th>
                <td>Y / M</td>
                <th colSpan="2">매수</th>
                <td>0</td>
                <th colSpan="3">주문도금량</th>
                <td>7,420</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-row">
          <table className="ui table center">
            <tbody>
              <tr>
                <th rowSpan="6">열연</th>
                <th rowSpan="2" className="grey-bg lighten-5">
                  1H
                </th>
                <td>M/T</td>
                <td>2A</td>
                <td>데이터값</td>
                <td>PH-PN40</td>
                <td>D18</td>
                <td>SM420</td>
                <td>HAPP3</td>
                <td className="right">0.8</td>
                <td className="right">5.5</td>
                <td className="right">490</td>
                <td className="right">2,200</td>
              </tr>
              <tr>
                <td>%</td>
                <td />
                <td>데이터값</td>
                <td />
                <td />
                <td />
                <td />
                <td className="right">0.8</td>
                <td className="right">5.5</td>
                <td className="right">490</td>
                <td className="right">2,200</td>
              </tr>
              <tr>
                <th rowSpan="2" className="grey-bg lighten-5">
                  2H
                </th>
                <td>M/T</td>
                <td />
                <td />
                <td>데이터값</td>
                <td />
                <td />
                <td />
                <td className="right">0.8</td>
                <td className="right">5.5</td>
                <td className="right">490</td>
                <td className="right">2,200</td>
              </tr>
              <tr>
                <td>%</td>
                <td>2A</td>
                <td>데이터값</td>
                <td>PH-PN40</td>
                <td>D18</td>
                <td>SM420</td>
                <td>HAPP3</td>
                <td className="right">0.8</td>
                <td className="right">5.5</td>
                <td className="right">490</td>
                <td className="right">2,200</td>
              </tr>
              <tr className="yellow-bg lighten-1">
                <th rowSpan="2" className="grey-bg lighten-5">
                  합계
                </th>
                <td>M/T</td>
                <td>2A</td>
                <td>데이터값</td>
                <td>PH-PN40</td>
                <td>D18</td>
                <td>SM420</td>
                <td>HAPP3</td>
                <td className="right">0.8</td>
                <td className="right">5.5</td>
                <td className="right">490</td>
                <td className="right">2,200</td>
              </tr>
              <tr className="yellow-bg lighten-1">
                <td>%</td>
                <td>2A</td>
                <td>데이터값</td>
                <td>PH-PN40</td>
                <td>D18</td>
                <td>SM420</td>
                <td>HAPP3</td>
                <td className="right">0.8</td>
                <td className="right">5.5</td>
                <td className="right">490</td>
                <td className="right">2,200</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* // <Divider
        //   horizontal
        //   style={{ margin: '1rem 0 0.5rem', fontSize: '14px' }}
        // >
        //   Case 3 : 복합형
        // </Divider> */}

        <div className="table-row">
          <table className="ui table">
            <colgroup>
              <col span="7" className="pw-12" />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th colSpan="8">시험항목기준</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>도금_상</th>
                <td>ZC</td>
                <th>도금_하</th>
                <td>ZC</td>
                <th>CBM굴곡_각도</th>
                <td>180</td>
                <th>CBM굴곡_간격</th>
                <td>100,000,000,000,000,000</td>
              </tr>
              <tr>
                <th>CMB굴곡_종류</th>
                <td>A</td>
                <th>인장_YP_Min</th>
                <td>260</td>
                <th>인장2_EL_Min</th>
                <td>25</td>
                <th>시험공기</th>
                <td />
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-row">
          <table className="ui table center">
            <thead>
              <tr>
                <th colSpan="3">시펀진도</th>
                <th colSpan="4">생산부서</th>
                <th colSpan="6">재질시험</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th rowSpan="8" className="grey-bg lighten-4">
                  열연
                </th>
                <th rowSpan="2">공장</th>
                <th rowSpan="2">구분</th>
                <th rowSpan="2">확정(B)</th>
                <th rowSpan="2">미채취(C)</th>
                <th rowSpan="2">규격약호</th>
                <th rowSpan="2">주문용도지정코드</th>
                <th rowSpan="2">출강목표번호</th>
                <th rowSpan="2">~1일</th>
                <th colSpan="2">제품주문두께</th>
                <th colSpan="2">제품주문두께</th>
              </tr>
              <tr>
                <th>이상</th>
                <th>미만</th>
                <th>이상</th>
                <th>미만</th>
              </tr>
              <tr>
                <th rowSpan="2">1H</th>
                <td>M/T</td>
                <td>2A</td>
                <td />
                <td>PH-PN40</td>
                <td>D18</td>
                <td>SM420</td>
                <td>HAPP3</td>
                <td className="right">0.8</td>
                <td className="right">5.5</td>
                <td className="right">490</td>
                <td className="right">2,200</td>
              </tr>
              <tr>
                <td>%</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td className="right">0.8</td>
                <td className="right">5.5</td>
                <td className="right">490</td>
                <td className="right">2,200</td>
              </tr>
              <tr>
                <th rowSpan="2">2H</th>
                <td>M/T</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td className="right">0.8</td>
                <td className="right">5.5</td>
                <td className="right">490</td>
                <td className="right">2,200</td>
              </tr>
              <tr>
                <td>%</td>
                <td>2A</td>
                <td />
                <td>PH-PN40</td>
                <td>D18</td>
                <td>SM420</td>
                <td>HAPP3</td>
                <td className="right">0.8</td>
                <td className="right">5.5</td>
                <td className="right">490</td>
                <td className="right">2,200</td>
              </tr>
              <tr className="yellow-bg lighten-1">
                <th rowSpan="2">합계</th>
                <td>M/T</td>
                <td>2A</td>
                <td />
                <td>PH-PN40</td>
                <td>D18</td>
                <td>SM420</td>
                <td>HAPP3</td>
                <td className="right">0.8</td>
                <td className="right">5.5</td>
                <td className="right">490</td>
                <td className="right">2,200</td>
              </tr>
              <tr className="yellow-bg lighten-1">
                <td>%</td>
                <td>2A</td>
                <td />
                <td>PH-PN40</td>
                <td>D18</td>
                <td>SM420</td>
                <td>HAPP3</td>
                <td className="right">0.8</td>
                <td className="right">5.5</td>
                <td className="right">490</td>
                <td className="right">2,200</td>
              </tr>
            </tbody>
          </table>
        </div>
        </React.Fragment>),
  },
  {
    name: 'router3',
    path: "/router3",
    component : () =>  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>First</Label>
        </Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>,
  },
];

const Routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout component_list ={component_list}>
        <Switch>
          <Redirect exact path="/" to="/home" />
          {component_list.map((c, i)=><Route exact key={i} path={c.path} component={c.component} />)}
          <Route component={() => <Tset />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
