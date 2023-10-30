import { AlertCircleComponent } from './svg/alert-circle/alert-circle.component';
import { AlignLeftComponent } from './svg/align-left/align-left.component';
import { BellComponent } from './svg/bell/bell.component';
import { BoxComponent } from './svg/box/box.component';
import { CartShoppingComponent } from './svg/cart-shopping/cart-shopping.component';
import { ChartPieComponent } from './svg/chart-pie/chart-pie.component';
import { CheckComponent } from './svg/check/check.component';
import { CircleArrowRightComponent } from './svg/circle-arrow-right/circle-arrow-right.component';
import { CodeViewerComponent } from './code-viewer/code-viewer.component';
import { CoffeComponent } from './svg/coffe/coffe.component';
import { CommonModule } from '@angular/common';
import { DatabaseComponent } from './svg/database/database.component';
import { DevCompComponent } from './dev-comp/dev-comp.component';
import { DownloadComponent } from './svg/download/download.component';
import { EditComponent } from './svg/edit/edit.component';
import { ExampleViewerComponent } from './example-viewer/example-viewer.component';
import { FileTextComponent } from './svg/file-text/file-text.component';
import { FlagComponent } from './svg/flag/flag.component';
import { FooterComponent } from './footer/footer.component';
import { GiftComponent } from './svg/gift/gift.component';
import { GlobeComponent } from './svg/globe/globe.component';
import { HealthActivityComponent } from './svg/health-activity/health-activity.component';
import { HexagonComponent } from './svg/hexagon/hexagon.component';
import { HomeComponent } from './svg/home/home.component';
import { IcoCalendarComponent } from './svg/calendar/calendar.component';
import { InfoComponent } from './sidebar/info/info.component';
import { LayoutComponent } from './svg/layout/layout.component';
import { LinkExternalComponent } from './svg/link-external/link-external.component';
import { LoadingLoaderComponent } from './svg/loading-loader/loading-loader.component';
import { MousePointerComponent } from './svg/mouse-pointer/mouse-pointer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { PhoneCallComponent } from './svg/phone-call/phone-call.component';
import { PhoneComponent } from './svg/phone/phone.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './svg/search/search.component';
import { SettingsComponent } from './svg/settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SlashComponent } from './svg/slash/slash.component';
import { SquareCheckComponent } from './svg/square-check/square-check.component';
import { SvgIconLoadingComponent } from './svg/loading/loading.component';
import { ToolComponent } from './svg/tool/tool.component';
import { TooltipModule } from '@vissoto-angular/ui';
import { UploadComponent } from './svg/upload/upload.component';
import { UserCheckComponent } from './svg/user-check/user-check.component';
import { UserComponent } from './svg/user/user.component';
import { UserPlusComponent } from './svg/user-plus/user-plus.component';
import { XComponent } from './svg/x/x.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    ExampleViewerComponent,
    CodeViewerComponent,
    FooterComponent,
    InfoComponent,
    SvgIconLoadingComponent,
    DownloadComponent,
    PhoneComponent,
    XComponent,
    CircleArrowRightComponent,
    ChartPieComponent,
    EditComponent,
    PhoneCallComponent,
    UserCheckComponent,
    MousePointerComponent,
    FileTextComponent,
    UploadComponent,
    UserComponent,
    LinkExternalComponent,
    SearchComponent,
    CartShoppingComponent,
    LoadingLoaderComponent,
    BoxComponent,
    FlagComponent,
    SquareCheckComponent,
    SettingsComponent,
    HomeComponent,
    GlobeComponent,
    UserPlusComponent,
    HealthActivityComponent,
    IcoCalendarComponent,
    BellComponent,
    GiftComponent,
    DatabaseComponent,
    CheckComponent,
    AlignLeftComponent,
    LayoutComponent,
    ToolComponent,
    HexagonComponent,
    CoffeComponent,
    SlashComponent,
    AlertCircleComponent,
    DevCompComponent,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    ExampleViewerComponent,
    CodeViewerComponent,
    FooterComponent,
    SvgIconLoadingComponent,
    DownloadComponent,
    PhoneComponent,
    XComponent,
    CircleArrowRightComponent,
    ChartPieComponent,
    EditComponent,
    PhoneCallComponent,
    UserCheckComponent,
    MousePointerComponent,
    FileTextComponent,
    UploadComponent,
    UserComponent,
    LinkExternalComponent,
    SearchComponent,
    CartShoppingComponent,
    LoadingLoaderComponent,
    BoxComponent,
    FlagComponent,
    SquareCheckComponent,
    SettingsComponent,
    HomeComponent,
    GlobeComponent,
    UserPlusComponent,
    HealthActivityComponent,
    IcoCalendarComponent,
    BellComponent,
    GiftComponent,
    DatabaseComponent,
    CheckComponent,
    AlignLeftComponent,
    LayoutComponent,
    ToolComponent,
    HexagonComponent,
    CoffeComponent,
    SlashComponent,
    AlertCircleComponent,
    DevCompComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, TooltipModule, RouterModule],
})
export class SharingComponentsModule {}
