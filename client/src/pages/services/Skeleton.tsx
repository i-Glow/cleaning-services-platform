import SkeletonImage from "../../assets/Skeleton.jpg";

export default function Skeleton() {
  return (
    <div className="py-10 flex flex-col items-center justify-center">
      <div className="w-96">
        <img src={SkeletonImage} />
      </div>
      Selectionner un service pour afficher les offres
    </div>
  );
}
