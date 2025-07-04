import React, { useState, useEffect } from 'react';

interface Node {
  id: number;
  left: number;
  top: number;
}

interface Line {
  id: number;
  left: number;
  top: number;
  width: number;
  angle: number;
}

const BlockchainAnimation: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    const nodeCount = 15;
    const generatedNodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      generatedNodes.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
      });
    }
    setNodes(generatedNodes);

    const generatedLines: Line[] = [];
    generatedNodes.forEach((node, index) => {
        if (index < generatedNodes.length - 1) {
            const nextNode = generatedNodes[index + 1];

            const x1 = node.left;
            const y1 = node.top;
            const x2 = nextNode.left;
            const y2 = nextNode.top;

            const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

            generatedLines.push({
                id: index,
                left: x1,
                top: y1,
                width: length,
                angle: angle,
            });
        }
    });
    setLines(generatedLines);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
      {lines.map((line) => (
        <div
          key={`line-${line.id}`}
          className="absolute h-0.5 bg-[#00ff9d] shadow-[0_0_10px_#00ff9d] animate-pulse-line"
          style={{
            left: `${line.left}%`,
            top: `${line.top}%`,
            width: `${line.width}%`,
            transform: `rotate(${line.angle}deg)`,
            transformOrigin: '0 0',
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      {nodes.map((node) => (
        <div
          key={`node-${node.id}`}
          className="absolute w-2.5 h-2.5 bg-[#00ff9d] rounded-full shadow-[0_0_15px_#00ff9d] animate-pulse"
          style={{
            left: `${node.left}%`,
            top: `${node.top}%`,
            animation: `float 6s ease-in-out infinite, pulse 2s infinite`,
            animationDelay: `${Math.random() * 5}s, ${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BlockchainAnimation;