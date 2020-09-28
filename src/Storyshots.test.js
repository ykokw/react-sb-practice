import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';
import { styleSheetSerializer } from 'jest-styled-components/serializer';
import { addSerializer } from 'jest-specific-snapshot'

addSerializer(styleSheetSerializer);

initStoryshots({
    integrityOptions: { cwd: __dirname },
    test: multiSnapshotWithOptions({}),
});