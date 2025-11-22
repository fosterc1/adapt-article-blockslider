import Adapt from 'core/js/adapt';

const BlockSliderModel = {

  isBlockSliderEnabled() {
    const config = this.get('_articleBlockSlider');
    if (!config || !config._isEnabled || (config._isDisabledWhenAccessibilityActive && Adapt.a11y.isEnabled())) {
      return false;
    }

    return true;
  }

};

export default BlockSliderModel;
