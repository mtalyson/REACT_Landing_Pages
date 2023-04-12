import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';
import mockBase from '../Base/mock';

export default {
  children: (
    <>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
    </>
  ),
  ...mockBase,
};
