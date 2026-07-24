type CharacterCounterProps = {
  current: number;
  max: number;
};

export default function CharacterCounter({
  current,
  max,
}: CharacterCounterProps) {
  return (
    <div className="mt-1 text-right text-xs text-slate-400">
      {current} / {max}
    </div>
  );
}