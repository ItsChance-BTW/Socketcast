/* eslint-disable padded-blocks */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/semi */
import React from 'react';
import { PlannedResponseUnit, PlannedResponseUnitType } from './type';

const PRUnit = ({
  pru, index, onMoveUp, onMoveDown, onRemove,
}: { pru: PlannedResponseUnit, index: number, onMoveUp: any, onMoveDown: any, onRemove: any }) => {

  /**
   * TODO
   * Using ternaries probably is not a good idea here because there may be
   * a potential for more than two PlannedResponseUnitTypes
   */
  return (
    <div className="PRUnit">
      <div className="top-section">
        <span className="title-type">
          {pru.type === PlannedResponseUnitType.MESSAGE ? 'Message' : 'Delay'}
        </span>
        <button type="button" onClick={onRemove}>Remove</button>
        <button type="button" onClick={onMoveUp}>Up</button>
        <button type="button" onClick={onMoveDown}>Down</button>
      </div>
      <div className="message-section">{pru.type === PlannedResponseUnitType.MESSAGE ? pru.message : pru.time}</div>
    </div>
  );
}

export default PRUnit;