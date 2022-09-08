const f=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const e=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const y=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const L=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const{components:t}=window.enmity;t.Alert,t.Button,t.FlatList,t.Image,t.ImageBackground,t.KeyboardAvoidingView,t.Modal;const I=t.Pressable;t.RefreshControl;const H=t.ScrollView;t.SectionList,t.StatusBar,t.StyleSheet,t.Switch;const z=t.Text;t.TextInput,t.TouchableHighlight,t.TouchableOpacity,t.TouchableWithoutFeedback,t.Touchable;const D=t.View;t.VirtualizedList,t.Form,t.FormArrow,t.FormCTA,t.FormCTAButton,t.FormCardSection,t.FormCheckbox;const F=t.FormDivider;t.FormHint,t.FormIcon,t.FormInput,t.FormLabel,t.FormRadio;const r=t.FormRow,B=t.FormSection;t.FormSelect,t.FormSubLabel;const C=t.FormSwitch;t.FormTernaryCheckBox,t.FormText,t.FormTextColors,t.FormTextSizes;function j(n){window.enmity.plugins.registerPlugin(n)}function c(n){return window.enmity.assets.getIDByName(n)}const w={byProps:(...n)=>window.enmity.modules.filters.byProps(...n),byName:(n,i)=>window.enmity.modules.filters.byName(n,i),byTypeName:(n,i)=>window.enmity.modules.filters.byTypeName(n,i),byDisplayName:(n,i)=>window.enmity.modules.filters.byDisplayName(n,i)};function _(...n){return window.enmity.modules.bulk(...n)}function q(...n){return window.enmity.modules.getByProps(...n)}window.enmity.modules.common;function $(n,i,o){return window.enmity.utilities.findInReactTree(n,i,o)}function K(n){return window.enmity.patcher.create(n)}var W="AccountInfo",N="1.3.4",Y="Shows Account Information and Account Assets.",k="stable",X=[{name:"acquite",id:"581573474296791211"}],J="#ff1f84",Q={name:W,version:N,description:Y,release:k,authors:X,color:J};const[Z,ee]=_(w.byProps("transitionToGuild"),w.byProps("setString"));var te=({settings:n})=>{const i=c("ic_selection_checked_24px"),o=L.createThemedStyleSheet({icon:{color:f.ThemeColorMap.INTERACTIVE_NORMAL}});return e.createElement(e.Fragment,null,e.createElement(H,null,e.createElement(B,{title:"Enable Dedicated Buttons"},e.createElement(r,{label:"Assets",subLabel:"Show dedicated button to view Account Assets",leading:e.createElement(r.Icon,{style:o.icon,source:c("img_nitro_profile_banner")}),trailing:e.createElement(C,{value:n.getBoolean("pfpBtn",!1),onValueChange:()=>{n.toggle("pfpBtn",!1),y.open({content:`Successfully ${n.getBoolean("pfpBtn",!1)?"enabled":"disabled"} dedicated Assets Button.`,source:i})}})}),e.createElement(F,null),e.createElement(r,{label:"Status",subLabel:"Show dedicated button to copy a user's Status",leading:e.createElement(r.Icon,{style:o.icon,source:c("ic_passport_24px")}),trailing:e.createElement(C,{value:n.getBoolean("statusBtn",!1),onValueChange:()=>{n.toggle("statusBtn",!1),y.open({content:`Successfully ${n.getBoolean("statusBtn",!1)?"enabled":"disabled"} dedicated Status Button.`,source:i})}})})),e.createElement(F,null),e.createElement(B,{title:"Disable Entire Plugin"},e.createElement(r,{label:"Disable Plugin",leading:e.createElement(r.Icon,{style:o.icon,source:c("ic_rulebook_16px")}),trailing:e.createElement(C,{value:n.getBoolean("masterDisable",!1),onValueChange:()=>{n.toggle("masterDisable",!1),y.open({content:`Successfully ${n.getBoolean("masterDisable",!1)?"disabled":"enabled"} AccountInfo.`,source:i})}})})),e.createElement(F,null),e.createElement(B,{title:"Source Code"},e.createElement(r,{label:"Download",subLabel:"Copy the link of the plugin to Clipboard",leading:e.createElement(r.Icon,{style:o.icon,source:c("toast_copy_link")}),trailing:r.Arrow,onPress:()=>{ee.setString("https://raw.githubusercontent.com/acquitelol/account-info/main/dist/AccountInfo.js"),y.open({content:"Copied to clipboard",source:c("pending-alert")})}}),e.createElement(r,{label:"Source",subLabel:"Open the Repo of the Plugin Externally",leading:e.createElement(r.Icon,{style:o.icon,source:c("ic_leave_stage")}),trailing:r.Arrow,onPress:()=>{Z.openURL("https://github.com/acquitelol/account-info")}})),e.createElement(r,{label:`Plugin Version: ${N}
Release Channel: ${k}`})))};function ne(n,i,o){window.enmity.settings.set(n,i,o)}function m(n,i,o){return window.enmity.settings.getBoolean(n,i,o)}function oe(n,i,o){window.enmity.settings.toggle(n,i,o)}const[x,h,V,ie,re]=_(w.byDisplayName("UserProfileHeader",!1),w.byProps("getMember"),w.byProps("getGuild"),w.byProps("transitionToGuild"),w.byProps("setString"),w.byName("HeaderAvatar",!1),w.byName("ProfileBanner",!1)),S=K("account-info"),ae=q("getStatus","getState"),le={...Q,onStart(){S.after(x,"default",(n,i,o)=>{var u;const[d,p]=e.useState("Profile Picture");let l=m("AccountInfo","pfpBtn",!1),a=m("AccountInfo","statusBtn",!1),g=m("AccountInfo","masterDisable",!1);const[{user:s,type:M}]=i;try{var E=i[0].displayProfile.banner}catch{ne("AccountInfo","pfpToggle",!0)}if(M!==0)return o;const b=L.createThemedStyleSheet({container:{marginLeft:15.5,marginRight:15.5,marginTop:17.5},header:{color:f.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontFamily:f.Fonts.DISPLAY_BOLD,textTransform:"uppercase",fontSize:12.75,letterSpacing:.25},information:{borderRadius:4,backgroundColor:f.ThemeColorMap.BACKGROUND_TERTIARY,marginTop:10,marginBottom:10},item:{color:f.ThemeColorMap.TEXT_MUTED},icon:{color:f.ThemeColorMap.INTERACTIVE_NORMAL},switchArrow:{marginRight:15.5}}),P=c("img_nitro_profile_banner"),U=c("pending-alert"),O=c("toast_copy_link"),A=(u=s==null?void 0:s.getAvatarURL)==null?void 0:u.call(s,!1,4096,!0);if(!A)return o;const G=s.discriminator%5,R=typeof A=="number"?`https://cdn.discordapp.com/embed/avatars/${G}.png`:A==null?void 0:A.replace(".webp",".png"),v=ae.getActivities(s.id).find(T=>T.type===4);return g?e.createElement(e.Fragment,null,o):e.createElement(e.Fragment,null,o,e.createElement(D,{style:b.container},l||a?e.createElement(e.Fragment,null,e.createElement(z,{style:b.header},"Account Assets"),e.createElement(D,{style:b.information},l&&e.createElement(e.Fragment,null,e.createElement(r,{label:`View ${s.username}'s ${d}`,leading:e.createElement(r.Icon,{style:b.icon,source:P}),trailing:r.Arrow,onPress:()=>{E?m("AccountInfo","pfpToggle",!0)?h.openURL(R):h.openURL(`https://cdn.discordapp.com/banners/${s.id}/${E}.${E.startsWith("a_")?"gif":"png"}?size=4096`):h.openURL(R)},onLongPress:E?()=>{oe("AccountInfo","pfpToggle",!0),y.open({content:`Switched to ${m("AccountInfo","pfpToggle",!0)?"profile picture":"banner"} link.`,source:P}),p(d=="Profile Picture"?"Banner":"Profile Picture")}:()=>{y.open({content:`${s.username} does not have a banner.`,source:P})}})),l&&a&&e.createElement(F,null),v&&a&&e.createElement(e.Fragment,null,e.createElement(r,{label:`Copy ${s.username}'s Status`,leading:e.createElement(r.Icon,{style:b.icon,source:O}),trailing:r.Arrow,onPress:()=>{try{var T=v.emoji.name}catch{}V.setString(`${T?`:${T}:`:""} ${v.state?v.state:""}`),y.open({content:"Copied to clipboard",source:U})}})))):e.createElement(e.Fragment,null)))}),S.after(ie,"default",(n,[{user:i}],o)=>{var u;let d=m("AccountInfo","pfpBtn",!1),p=m("AccountInfo","masterDisable",!1);const l=(u=i==null?void 0:i.getAvatarURL)==null?void 0:u.call(i,!1,4096,!0);if(!l)return o;const a=i.discriminator%5,g=typeof l=="number"?`https://cdn.discordapp.com/embed/avatars/${a}.png`:l==null?void 0:l.replace(".webp",".png");return p||d?e.createElement(e.Fragment,null,o):e.createElement(I,{onPress:()=>h.openURL(g)},o)}),S.after(re,"default",(n,[{bannerSource:i}],o)=>{let u=m("AccountInfo","pfpBtn",!1),d=m("AccountInfo","masterDisable",!1);if(typeof(i==null?void 0:i.uri)!="string"||!o)return o;let p=i.uri.split("/"),l=p[5].split(".")[0];const a=`https://cdn.discordapp.com/banners/${p[4]}/${l}.${l.startsWith("a_")?"gif":"png"}?size=4096`;return d||u?e.createElement(e.Fragment,null,o):e.createElement(I,{onPress:()=>h.openURL(a)},o)}),S.after(x,"default",(n,i,o)=>{const u=$(o,a=>{var g;return(g=a==null?void 0:a.props)==null?void 0:g.customStatusActivity});if(!u)return o;const d=$(o,a=>{var g,s;return(s=(g=a==null?void 0:a[2])==null?void 0:g.props)==null?void 0:s.customStatusActivity});if(!d||m("AccountInfo","statusBtn",!1)||m("AccountInfo","masterDisable",!1))return o;const p=d[2].props.customStatusActivity,l=c("pending-alert");d[2]=e.createElement(I,{onPress:()=>{try{var a=p.emoji.name}catch{}V.setString(`${a?`:${a}:`:""} ${p.state?p.state:""}`),y.open({content:"Copied to clipboard",source:l})}},u)})},onStop(){S.unpatchAll()},getSettingsPanel({settings:n}){return e.createElement(te,{settings:n})}};j(le);
