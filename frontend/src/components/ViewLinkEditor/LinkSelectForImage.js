import React from 'react';
import injectSheet from 'react-jss';
import styles from './LinkSelectForImage.styles';
import ArrowDownIcon from '../../assets/img/ArrowDown';
import DeleteIcon from '../../assets/img/Delete';


const isDefaultValue = value => !value || value === '0';

const LinkSelectForImage = ({
  classes,
  theme,
  number,
  interactionId,
  options,
  value,
  onChange,
  onDelete
}) => (
  <div className={classes.LinkSelectForImage}>
    <div className={classes.Number}>
      { number }
    </div>
    <div className={classes.SelectHelper}>
      <select
        className={ isDefaultValue(value) ? 'default-value' : '' }
        value={value}
        onChange={onChange}
        >
          { options.map((option, index) => (
            <option key={ index } value={ option.value }>{ option.title }</option>
          ))
        }
      </select>
      <ArrowDownIcon color={ isDefaultValue(value) ? theme.Select.default.textColor : theme.Select.notDefault.textColor } />
    </div>
    <div className={classes.DeleteButton} onClick={() => onDelete(interactionId)}>
      <DeleteIcon />
    </div>
  </div>
);

export default injectSheet(styles)(LinkSelectForImage);