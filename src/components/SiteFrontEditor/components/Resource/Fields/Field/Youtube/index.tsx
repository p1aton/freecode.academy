import React from 'react'

import ResourceField from '..'
import TextField from 'material-ui/TextField'
import Grid from 'src/uikit/Grid'

class Youtube extends ResourceField {
  static defaultProps = {
    ...ResourceField.defaultProps,
    label: undefined,
    helperText: undefined,
    // readOnly: true,
    style: {
      ...ResourceField.defaultProps.style,
      maxWidth: 800,
      width: '100%',
      margin: '0 auto',
    },
    src: 'https://www.youtube.com/embed/vqyZrf5i3TM',
  }

  static Name = 'Youtube'

  // onBeforeDrop = () => {}

  canBeDropped = () => {
    return false
  }

  renderPanelView(content: React.ReactNode) {
    return super.renderPanelView(
      content || <div className={'panelYoutube'}>Youtube</div>
    )
  }

  renderAddButton() {
    return super.renderAddButton('Youtube видео')
  }

  // canBeParent(parent) {

  //   return parent instanceof Section && super.canBeParent(parent);
  // }

  canBeChild() {
    return false
  }

  onYoutubeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    this.updateComponentProps({
      [name]: value,
    })
  }

  renderChildren() {
    const { src, ...other } = this.getComponentProps(this)

    const { activeItem } = this.getEditorContext()

    const object = this.getObjectWithMutations()

    if (!object) {
      return null
    }

    const inner = this.renderComponent(
      {
        name: 'VideoWrapper',
        component: 'Section',
        props: {
          ...other,
        },
        components: [
          {
            name: 'Video',
            props: {
              style: {
                height: 0,
                position: 'relative',
                paddingTop: '56.25%',
                overflow: 'hidden',
                boxShadow: '0px 0px 6px 1px #dcb16b',
              },
            },
            component: 'Section',
            components: [
              {
                name: 'Tag',
                component: 'Tag',
                props: {
                  tag: 'iframe',
                  src: src,
                  frameborder: 0,
                  allow:
                    'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
                  allowfullscreen: 'true',
                  style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    border: 0,
                    width: '100%',
                    height: '100%',
                  },
                },
                components: [],
              },
            ],
          },
        ],
      },
      0
    )

    let settings

    if (activeItem && activeItem === this) {
      settings = (
        <Grid container spacing={8}>
          <Grid item xs>
            <TextField
              name="src"
              value={src || ''}
              label="Ссылка на видео"
              helperText="Только из youtube"
              fullWidth
              onChange={this.onYoutubeChange}
            />
          </Grid>
        </Grid>
      )
    }
    return (
      <div>
        {inner}
        {settings}
      </div>
    )
  }
}

export default Youtube
