// src/containers/allprojects/index.jsx
import React from "react";
import BrainTumorDetectedCNN from "./BrainTumorDetectedCNN";
import BrainTumorDetectedViT from "./BrainTumorDetectedViT";
import CPPlibrary from "./CPPlibrary";
import NurseSchedule from "./NurseSchedule";
import KnapsackLogistics from "./KnapsackLogistics";
import MarketTrendLSTM from "./MarketTrendLSTM";
import ToxicCommentClassification from "./ToxicCommentClassification";
import AIAssignments from "./AIAssignments";

export default function AllProjects() {
  return (
    <div>
      <BrainTumorDetectedCNN />
      <BrainTumorDetectedViT />
      <AIAssignments />
      <CPPlibrary />
      <NurseSchedule />
      <KnapsackLogistics />
      <MarketTrendLSTM />
      <ToxicCommentClassification />
    </div>
  );
}
