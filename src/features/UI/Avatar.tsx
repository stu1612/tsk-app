type Prop = {
  src: string;
};

export default function Avatar({ src }: Prop) {
  return (
    <div className="h-12 w-12">
      <img src={src} alt="avatar" />
    </div>
  );
}
