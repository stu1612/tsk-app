// files
import Header from "../features/UI/Header";
import OnBoardingLayout from "../features/UI/OnBoardingLayout";
import OnBoardingNavbar from "../features/UI/OnBoardingNavbar";

export default function Home() {
  return (
    <OnBoardingLayout>
      <OnBoardingNavbar />
      <Header />
    </OnBoardingLayout>
  );
}
