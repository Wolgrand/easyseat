import React, { useEffect, useState, useRef } from 'react';

import { Container } from './styles';

interface ProgressChartProps {
  size: number;
  progress: number;
  strokeWidth: number;
  circleOneStroke: string;
  circleTwoStroke: string;
  label: string;
}

const ProgressChart: React.FC<ProgressChartProps> = ({
  size,
  progress,
  strokeWidth,
  circleOneStroke,
  circleTwoStroke,
  label,
}) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, progress, circumference, offset]);

  return (
    <Container>
      <svg className="svg" width={size} height={size}>
        <circle
          className="svg-circle-bg"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="svg-circle"
          ref={circleRef}
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text x={`${center}`} y={`${center + 6}`} className="svg-circle-text">
          {label}
        </text>
      </svg>
    </Container>
  );
};

export default ProgressChart;
