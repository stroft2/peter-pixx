/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

interface FilterPanelProps {
  onApplyFilter: (prompt: string) => void;
  isLoading: boolean;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onApplyFilter, isLoading }) => {
  const [customPrompt, setCustomPrompt] = useState('');

  const presets = [
    { name: 'Synthwave', prompt: 'Apply a vibrant 80s synthwave aesthetic with neon magenta and cyan glows, and subtle scan lines.' },
    { name: 'Anime', prompt: 'Give the image a vibrant Japanese anime style, with bold outlines, cel-shading, and saturated colors.' },
    { name: 'Lomo', prompt: 'Apply a Lomography-style cross-processing film effect with high-contrast, oversaturated colors, and dark vignetting.' },
    { name: 'Glitch', prompt: 'Transform the image into a futuristic holographic projection with digital glitch effects and chromatic aberration.' },
  ];

  const handleCustomApply = () => {
    if (customPrompt.trim()) {
      onApplyFilter(customPrompt);
      setCustomPrompt('');
    }
  };

  return (
    <div className="w-full bg-purple-950/50 border border-purple-800/50 rounded-xl p-4 flex flex-col gap-4 animate-fade-in backdrop-blur-2xl animated-panel">
      <h3 className="text-lg font-semibold text-center text-purple-200">Creative Filters</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {presets.map(preset => (
          <button
            key={preset.name}
            onClick={() => onApplyFilter(preset.prompt)}
            disabled={isLoading}
            className="w-full text-center bg-purple-900/40 border border-transparent text-purple-200 font-semibold py-3 px-4 rounded-md transition-all duration-200 ease-in-out hover:bg-purple-800/60 hover:border-purple-500/30 active:scale-95 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {preset.name}
          </button>
        ))}
      </div>
      
      <form onSubmit={(e) => { e.preventDefault(); handleCustomApply(); }} className="w-full flex items-center gap-3">
        <input
          type="text"
          value={customPrompt}
          onChange={(e) => setCustomPrompt(e.target.value)}
          placeholder="Or describe a custom filter (e.g., '80s synthwave glow')"
          className="flex-grow bg-purple-950/50 border border-purple-800 text-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none transition w-full disabled:cursor-not-allowed disabled:opacity-60 text-base"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="bg-purple-800 text-white font-bold py-3 px-5 rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-purple-900/40 hover:bg-purple-700 active:scale-95 text-base disabled:bg-purple-800/50 disabled:shadow-none disabled:cursor-not-allowed"
          disabled={isLoading || !customPrompt.trim()}
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default FilterPanel;