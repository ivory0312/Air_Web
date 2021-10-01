import { ResponsivePie } from "@nivo/pie";
import React from "react";

const Chart = (): JSX.Element => {
  const data = [
    {
      id: "국어",
      label: "국어",
      value: 100,
      color: "#ED6A5E",
    },
    {
      id: "수학",
      label: "수학",
      value: 100,
      color: "#8886FF",
    },
    {
      id: "과학",
      label: "과학",
      value: 300,
      color: "#F6C343",
    },
    {
      id: "사회",
      label: "사회",
      value: 400,
      color: "#79D16E",
    },
    {
      id: "영어",
      label: "영어",
      value: 300,
      color: "#97BAFF",
    },
    {
      id: "웹프",
      label: "웹프",
      value: 300,
      color: "#8886FF",
    },
    {
      id: "프실",
      label: "프실",
      value: 300,
      color: "#F6C343",
    },
    {
      id: "역사",
      label: "역사",
      value: 300,
      color: "#F6C343",
    },
    {
      id: "체육",
      label: "체육",
      value: 300,
      color: "#F6C343",
    },
    {
      id: "음악",
      label: "음악",
      value: 400,
      color: "#79D16E",
    },
    {
      id: "도덕",
      label: "도덕",
      value: 300,
      color: "#97BAFF",
    },
  ];

  return (
    <>
      <ResponsivePie
        data={data}
        colors={(data) => data.data.color}
        innerRadius={0.5}
        padAngle={1}
        enableArcLinkLabels={false}
        enableArcLabels={false}
      />
    </>
  );
};

export default Chart;
