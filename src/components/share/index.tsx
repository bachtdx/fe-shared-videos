import React from "react";
import { Card, Typography, Input, Button, Row, Col } from "antd";
import "./index.scss";

function Index() {
  return (
    <div>
      <Row>
        <Col
          xl={{ offset: 7, span: 10 }}
          xxl={{ offset: 9, span: 6 }}
          lg={{ offset: 7, span: 10 }}
          md={{ offset: 7, span: 12 }}
          sm={{ offset: 7, span: 12 }}
          xs={{ offset: 2, span: 20 }}
        >
          <fieldset>
            <legend>Share a Youtube movie</legend>

            <div
              style={{
                marginBottom: 20,
                marginTop: 20,
              }}
            >
              <Row>
                <Col span={8} style={{paddingTop: 8}}>
                  <span >
                    Youtube URL:
                  </span>
                </Col>
                <Col span={16}>
                  <Input required={true}/>
                </Col>
                <Col span={8}>
                </Col>
                <Col span={16}>
                <Button style={{width: "100%", marginTop: 30}}>Share</Button>
                </Col>
              </Row>
            </div>
          </fieldset>
        </Col>
      </Row>
    </div>
  );
}

export default Index;
