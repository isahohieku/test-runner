import styles from './styles.module.scss';
import classnames from 'classnames';

interface Props {
  className: string;
}
const Loader = ({ className }: Props) => (
  <div className={classnames([styles.loaderRing, className])}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Loader;
