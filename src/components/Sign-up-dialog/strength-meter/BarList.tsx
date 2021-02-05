interface barListProps {
  bars: number[];
}

function BarList({ bars }: barListProps) {
  return (
    <div style={{ display: "flex" }}>
      {bars.map((bar) => (
        <div key={bar} className="s"></div>
      ))}
    </div>
  );
}

export default BarList;
