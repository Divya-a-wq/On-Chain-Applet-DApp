import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import AppletCard from "../components/AppletCard";
import WorkflowBuilder from "../components/WorkflowBuilder";

export default function Dashboard() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <TopBar />
        <div className="applet-section">
          <AppletCard title="Code Builder" />
          <AppletCard title="ML Trainer" />
          <AppletCard title="Image Analyzer" />
          <AppletCard title="Speech Synth" />
        </div>
        <WorkflowBuilder />
      </div>
    </div>
  );
}
