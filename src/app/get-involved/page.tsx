import GetInvolvedHero from '../../components/get-involved/GetInvolvedHero';
import WaysToGetInvolved from '../../components/get-involved/WaysToGetInvolved';
import ImpactHighlight from '../../components/get-involved/ImpactHighlight';
import BePartOfChange from '../../components/BePartOfChange';

export default function GetInvolved() {
  return (
    <main className="bg-neutral">
      <GetInvolvedHero />
      <ImpactHighlight />
      <WaysToGetInvolved />
      <BePartOfChange />
    </main>
  );
}



