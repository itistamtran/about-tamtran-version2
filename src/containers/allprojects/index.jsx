// src/containers/allprojects/index.jsx
import React from 'react';
import BrainTumorDetected from './BrainTumorDetected';
import CPPlibrary from './CPPlibrary';
import NurseSchedule from './NurseSchedule';
import KnapsackLogistics from './KnapsackLogistics';
import MarketTrendLSTM from './MarketTrendLSTM';
import ToxicCommentClassification from './ToxicCommentClassification';

export default function AllProjects() {
  return (
    <div>
      <BrainTumorDetected />
      <CPPlibrary />
      <NurseSchedule />
      <KnapsackLogistics />
      <MarketTrendLSTM />
      <ToxicCommentClassification />
    </div>
  );
}
