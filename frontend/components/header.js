import React from "react";
import logo from "../public/logo.png";

import Link from "next/link";
import Image from "next/image";
import { Row, Col, Tooltip, Typography} from "antd";

const { Title } = Typography;

import {
  QuestionCircleOutlined,
  ExperimentOutlined,
  GithubOutlined,
} from "@ant-design/icons";

export const Header = () => {
  return (
    <Row align="center" span={24} id="header">
      <Col span={2}>
        <Link href="/about">
          <Image src={logo} width={80} alt="" />
        </Link>
      </Col>
      <Col span={10} offset={4}>
        <Link href="/">
          <Title align="center" italic>
            zkalc
          </Title>
        </Link>
      </Col>
      <Col span={3} offset={3}>
        <Link href="/about">
          <Tooltip title="about zkalc">
            <QuestionCircleOutlined
              style={{ fontSize: "25px", color: "black" }}
            />
          </Tooltip>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link href="/methodology">
          <Tooltip title="zkalc scientific methodology">
            <ExperimentOutlined style={{ fontSize: "25px", color: "black" }} />
          </Tooltip>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link href="https://github.com/asn-d6/zkalc">
          <Tooltip title="zkalc github">
            <GithubOutlined style={{ fontSize: "25px", color: "black" }} />
          </Tooltip>
        </Link>
      </Col>
    </Row>
  );
};
