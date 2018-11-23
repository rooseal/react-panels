import React, { useState } from 'react';

/**
 * Ik heb opzettelijk de nieuwe react feature gebruikt zodat ge ze gewoon wordt. :)
 */


const panelData = [
  [
    'Dit is de header om te toggelen',
    'Dit is de content die je enkel ziet als het panel open is.',
  ],
  ['Wil je nog een panel', 'Hier krijg je nog wat nutteloze content.'],
  [
    'Omdat af echt af is',
    'Dit is de content van de affe panel. Af is echt af.',
  ],
];

// Start Single Panel Components
const Panel = props => {
  
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => setCollapsed(!collapsed);

  return props.children(collapsed, toggleCollapsed);
};

const TestUngroupedPanels = () => (
  <div className="app">
    <h1 className="appHeader">Ungrouped Panels</h1>
    <div>
      {panelData.map(([header, content]) => (
        <Panel>
          {(collapsed, toggleCollapsed) => (
            <div
              className="panel"
              onClick={toggleCollapsed}
              role="button"
              tabIndex="0"
              onKeyDown={e => e.keyCode === 13 && toggleCollapsed()}
            >
              <div className="panelHeader">{header}</div>
              {!collapsed && <div className="panelContent">{content}</div>}
            </div>
          )}
        </Panel>
      ))}
    </div>
  </div>
);
// End Single Panel Components

// Start Grouped Panel Components
const GroupedPanel = props =>
  props.children(props.index === props.openIndex, () =>
    props.setOpenIndex(props.index === props.openIndex ? -1 : props.index)
  );

const PanelGroup = props => {
  const [index, setIndex] = useState(0);

  return props.children(index, setIndex);
};

const TestGroupedPanels = () => (
  <div className="app">
    <h1 className="appHeader">Grouped Panels</h1>
    <div>
      <PanelGroup>
        {(shownIndex, setIndex) =>
          panelData.map(([header, content], panelIndex) => (
            <GroupedPanel
              index={panelIndex}
              openIndex={shownIndex}
              setOpenIndex={setIndex}
            >
              {(collapsed, toggleCollapsed) => (
                <div
                  className="panel"
                  onClick={toggleCollapsed}
                  role="button"
                  tabIndex="0"
                  onKeyDown={e => e.keyCode === 13 && toggleCollapsed()}
                >
                  <div className="panelHeader">{header}</div>
                  {collapsed && (
                    <div className="panelContent">{content}</div>
                  )}
                </div>
              )}
            </GroupedPanel>
          ))
        }
      </PanelGroup>
    </div>
  </div>
);

const TestApp = () => (
  <React.Fragment>
    <div>
      <TestGroupedPanels />
    </div>
    <div>
      <TestUngroupedPanels />
    </div>
  </React.Fragment>
);

export default TestApp;
