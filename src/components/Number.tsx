type NumberProps = {
  nomor: number;
};

function Number({ nomor }: NumberProps) {
  return (
    <div className="w-8 h-8 rounded-full bg-accent-light flex flex-col justify-center items-center text-light">
      {nomor}
    </div>
  );
}

export default Number;
