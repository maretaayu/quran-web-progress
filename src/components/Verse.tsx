type VerseProps = {
  verse: string;
  surah: string;
};

function Verse({ verse, surah }: VerseProps) {
  return (
    <div className="bg-[url('/src/assets/VerseBackgroundImage.png')] p-4 rounded-2xl bg-cover bg-no-repeat min-h-[155px] text-left flex flex-col justify-between gap-2">
      <div>
        <p className="text-xs text-light md:text-base">📖 Your daily verse</p>
        <p className="text-sm text-light font-semibold md:text-xl">{verse}</p>
      </div>
      <p className="text-xs text-light font-light md:text-base">{surah}</p>
    </div>
  );
}

export default Verse;
