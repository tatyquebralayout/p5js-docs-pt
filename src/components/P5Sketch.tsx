import React from 'react';
import { P5WrapperClassName } from '@p5-wrapper/react';
import type p5Types from 'p5';

interface P5SketchProps {
  sketch: (p5: p5Types) => void;
  className?: string;
  width?: number;
  height?: number;
}

const P5Sketch: React.FC<P5SketchProps> = ({
  sketch,
  className = '',
  width = 400,
  height = 400,
}) => {
  return (
    <div className={`p5-sketch-container ${className}`}>
      <P5WrapperClassName
        sketch={sketch}
        style={{ width, height }}
      />
    </div>
  );
};

export default P5Sketch;