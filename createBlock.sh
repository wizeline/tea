FILE_NAME=$(tr '[:upper:]' '[:lower:]'<<<${1})
CAPITALIZE_FILE_NAME="$(tr '[:lower:]' '[:upper:]' <<<"${FILE_NAME:0:1}")${FILE_NAME:1}"
COMPONENT_DIRECTORY="./design-system/src/components/${FILE_NAME}"

# Create a component folder
mkdir -p "$COMPONENT_DIRECTORY";

# Create a component
cat > "${COMPONENT_DIRECTORY}/${FILE_NAME}.tsx" << EOF
import { Component } from '@stencil/core';

@Component({
  tag: 'wz-${FILE_NAME}',
  styleUrl: '${FILE_NAME}.scss',
  shadow: false,
})
export class ${CAPITALIZE_FILE_NAME} {
  render() {
    return (
      <div>
      </div>
    );
  }
}
EOF

# Create a e2e test file
cat > "${COMPONENT_DIRECTORY}/${FILE_NAME}.e2e.ts" << EOF
import { newE2EPage } from '@stencil/core/testing';

describe('wz-${FILE_NAME}', () => {
  it('should render a ${FILE_NAME}-component', async () => {
    const page = await newE2EPage();
    await page.setContent('<wz-${FILE_NAME}></wz-${FILE_NAME}>');
  });
});
EOF

# Create a css file
cat > "${COMPONENT_DIRECTORY}/${FILE_NAME}.scss" << EOF
wz-${FILE_NAME}{

}
EOF
