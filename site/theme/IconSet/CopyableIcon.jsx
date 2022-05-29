import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Icon } from '../../../dist';

const CopyableIcon = ({ type, justCopied, onCopied }) => (
  <CopyToClipboard
    text={`<Icon type="${type}" />`}
    onCopy={() => onCopied(type)}
  >
    <li className={justCopied === type ? 'copied' : ''}>
      <Icon type={type} />
      <span className="anticon-class">
          {type}
      </span>
    </li>
  </CopyToClipboard>
);
export default CopyableIcon;
