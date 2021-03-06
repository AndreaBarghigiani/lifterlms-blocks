/**
 * Block Attributes Inspector: Course Syllabus
 *
 * @since   1.0.0
 * @version 1.0.0
 */

// WP Deps.
const { __ } = wp.i18n
const { Component } = wp.element
const {
	InspectorControls,
} = wp.editor
const {
	PanelBody,
	PanelRow,
	SelectControl,
	TextControl,
	ToggleControl,
} = wp.components

export default class Inspector extends Component {

  render() {

	const { attributes: {
		course_id
	}, setAttributes } = this.props;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Course Syllabus Options', 'lifterlms' ) }>
			</PanelBody>
		</InspectorControls>
	)
  }
}
