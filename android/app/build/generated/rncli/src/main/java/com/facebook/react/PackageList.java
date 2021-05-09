
package com.facebook.react;

import android.app.Application;
import android.content.Context;
import android.content.res.Resources;

import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainPackageConfig;
import com.facebook.react.shell.MainReactPackage;
import java.util.Arrays;
import java.util.ArrayList;

import ir.media.test1.BuildConfig;
import ir.media.test1.R;

// react-native-tapsell
import ir.tapsell.reactnativesdk.TapsellReactNativePackage;
// @react-native-community/netinfo
import com.reactnativecommunity.netinfo.NetInfoPackage;
// @react-native-community/toolbar-android
import com.reactnativecommunity.toolbarandroid.ReactToolbarPackage;
// @react-native-firebase/app
import io.invertase.firebase.app.ReactNativeFirebaseAppPackage;
// @react-native-firebase/messaging
import io.invertase.firebase.messaging.ReactNativeFirebaseMessagingPackage;
// react-native-cafe-bazaar
import com.contoriel.cafebazaar.CafeBazaarPackage;
// react-native-cafebazaar-intents
import plus.karjoo.cafebazaar.intents.RNCafeBazaarIntentsPackage;
// react-native-contacts
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
// react-native-fast-image
import com.dylanvann.fastimage.FastImageViewPackage;
// react-native-gesture-handler
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
// react-native-image-crop-picker
import com.reactnative.ivpusic.imagepicker.PickerPackage;
// react-native-keep-awake
import com.corbt.keepawake.KCKeepAwakePackage;
// react-native-localize
import com.reactcommunity.rnlocalize.RNLocalizePackage;
// react-native-orientation
import com.github.yamill.orientation.OrientationPackage;
// react-native-rsa-native
import com.RNRSA.RNRSAPackage;
// react-native-share
import cl.json.RNSharePackage;
// react-native-spinkit
import com.react.rnspinkit.RNSpinkitPackage;
// react-native-svg
import com.horcrux.svg.SvgPackage;
// react-native-system-setting
import com.ninty.system.setting.SystemSettingPackage;
// react-native-vector-icons
import com.oblador.vectoricons.VectorIconsPackage;
// react-native-version-check
import io.xogus.reactnative.versioncheck.RNVersionCheckPackage;
// react-native-video
import com.brentvatne.react.ReactVideoPackage;
// react-native-view-shot
import fr.greweb.reactnativeviewshot.RNViewShotPackage;
// rn-fetch-blob
import com.RNFetchBlob.RNFetchBlobPackage;

public class PackageList {
  private Application application;
  private ReactNativeHost reactNativeHost;
  private MainPackageConfig mConfig;

  public PackageList(ReactNativeHost reactNativeHost) {
    this(reactNativeHost, null);
  }

  public PackageList(Application application) {
    this(application, null);
  }

  public PackageList(ReactNativeHost reactNativeHost, MainPackageConfig config) {
    this.reactNativeHost = reactNativeHost;
    mConfig = config;
  }

  public PackageList(Application application, MainPackageConfig config) {
    this.reactNativeHost = null;
    this.application = application;
    mConfig = config;
  }

  private ReactNativeHost getReactNativeHost() {
    return this.reactNativeHost;
  }

  private Resources getResources() {
    return this.getApplication().getResources();
  }

  private Application getApplication() {
    if (this.reactNativeHost == null) return this.application;
    return this.reactNativeHost.getApplication();
  }

  private Context getApplicationContext() {
    return this.getApplication().getApplicationContext();
  }

  public ArrayList<ReactPackage> getPackages() {
    return new ArrayList<>(Arrays.<ReactPackage>asList(
      new MainReactPackage(mConfig),
      new TapsellReactNativePackage(),
      new NetInfoPackage(),
      new ReactToolbarPackage(),
      new ReactNativeFirebaseAppPackage(),
      new ReactNativeFirebaseMessagingPackage(),
      new CafeBazaarPackage(),
      new RNCafeBazaarIntentsPackage(),
      new ReactNativeContacts(),
      new FastImageViewPackage(),
      new RNGestureHandlerPackage(),
      new PickerPackage(),
      new KCKeepAwakePackage(),
      new RNLocalizePackage(),
      new OrientationPackage(),
      new RNRSAPackage(),
      new RNSharePackage(),
      new RNSpinkitPackage(),
      new SvgPackage(),
      new SystemSettingPackage(),
      new VectorIconsPackage(),
      new RNVersionCheckPackage(),
      new ReactVideoPackage(),
      new RNViewShotPackage(),
      new RNFetchBlobPackage()
    ));
  }
}
