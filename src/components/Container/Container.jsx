import { Box } from '@chakra-ui/react';
import cls from './styles.module.scss';
const Container = ({ children }) => {
  return <Box className={cls.container}>{children}</Box>
};

export default Container;
