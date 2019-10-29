package com.tonikorin.cordova.plugin.autostart;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import com.tonikorin.cordova.plugin.autostart.AppStarter;
import com.tonikorin.cordova.plugin.autostart.MyJobIntentService;
 
public class BootCompletedReceiver extends BroadcastReceiver {
    
    @Override
    public void onReceive(Context context, Intent intent) {
        
        if (intent.getAction().equals(Intent.ACTION_BOOT_COMPLETED)) {
            Intent mIntent = new Intent(context, MyJobIntentService.class);
            mIntent.putExtra("maxCountValue", 1000);
            MyJobIntentService.enqueueWork(context, mIntent);
        }

        AppStarter appStarter = new AppStarter();
        appStarter.run(context, intent, PackageManager.COMPONENT_ENABLED_STATE_ENABLED, true);

    }
}
