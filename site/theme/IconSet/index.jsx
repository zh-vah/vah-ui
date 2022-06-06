import React, {useState} from "react";
import classNames from "classnames";
import CopyableIcon from "./CopyableIcon";

const IconSet = (props) => {
  const [justCopied, setJustCopied] = useState()
  const { className, catigory } = props;
  const listClassName = classNames({
    "anticons-list": true,
    clearfix: true,
    [className]: !!className,
  });

  const onCopied = (icon) => {
    setJustCopied({ justCopied: icon }, () => {
      setTimeout(() => {
        setJustCopied({ justCopied: null });
      }, 2000);
    });
  }

  const icons = {
    direction: ['angle-double-down', 'angle-double-left', 'angle-double-right', 'angle-double-up', 'angle-down', 'angle-left', 'angle-right', 'angle-up', 'arrow-circle-down', 'arrow-circle-left', 'arrow-circle-right', 'arrow-circle-up', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'arrows', 'arrows-alt', 'arrows-h', 'arrows-v', 'caret-down', 'caret-left', 'caret-right','caret-up', 'chevron-circle-down', 'chevron-circle-left', 'chevron-circle-right', 'chevron-circle-up', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'long-arrow-down', 'long-arrow-left', 'long-arrow-right', 'long-arrow-up'],
    transport: ['ambulance', 'automobile', 'bicycle', 'bus', 'cab', 'car', 'fighter-jet', 'motorcycle', 'plane', 'rocket', 'ship', 'space-shuttle', 'subway', 'taxi', 'train', 'truck', 'wheelchair', 'wheelchair-alt'],
    fileType:['file', 'file-archive', 'file-audio', 'file-code', 'file-excel', 'file-image', 'file', 'file-pdf', 'file-powerpoint', 'file-text', 'file-text', 'file-video', 'file-word'],
    accessibility: ['asl-interpreting', 'assistive-listening-systems', 'audio-description', 'braille', 'deaf', 'deafness', 'hard-of-hearing', 'question-circle', 'sign-language', 'signing', 'tty', 'universal-access', 'volume-control-phone', 'wheelchair', 'wheelchair-alt'],
    suggestion: ['question', 'question-circle', 'question-circle', 'plus', 'plus-circle', 'plus-circle', 'pause', 'pause-circle', 'pause-circle', 'minus', 'minus-circle', 'minus-circle', 'plus-square', 'plus-square', 'minus-square', 'minus-square', 'info', 'info-circle', 'info-circle', 'exclamation', 'exclamation-circle', 'exclamation-circle', 'close', 'close-square', 'close-square', 'check', 'check-circle', 'check-circle', 'check-square', 'check-square', 'warning'],
    other: ['lock', 'unlock', 'area-chart', 'pie-chart', 'bar-chart', 'bars', 'book', 'calendar', 'cloud', 'cloud-download', 'code', 'copy', 'credit-card', 'desktop', 'download', 'edit', 'ellipsis', 'file', 'file-text', 'file-pdf', 'file-word', 'file-excel', 'folder', 'folder-open', 'hdd', 'frown', 'meh', 'smile', 'inbox', 'laptop', 'line-chart', 'link', 'mobile', 'search', 'share-alt', 'shopping-cart', 'tablet', 'tag', 'upload', 'user', 'video-camera', 'home', 'cloud-upload', 'star', 'heart', 'rocket', 'bell', 'database', 'compass', 'barcode', 'hourglass', 'key', 'flag', 'sync', 'wifi', 'car', 'shop', 'gift', 'coffee', 'copyright', 'trademark', 'wallet', 'bank', 'trophy'],
  }; 
  return (
    <ul className={listClassName}>
      {icons[catigory].map((icon) => (
        <CopyableIcon
          key={icon}
          type={icon}
          justCopied={justCopied}
          onCopied={onCopied}
        />
      ))}
    </ul>
  );
};

export default IconSet;
