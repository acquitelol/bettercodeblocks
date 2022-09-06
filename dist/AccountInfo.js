const S=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const e=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const s=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const z=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const L=window.enmity.modules.common.Moment,{components:n}=window.enmity;n.Alert,n.Button,n.FlatList,n.Image,n.ImageBackground,n.KeyboardAvoidingView,n.Modal;const k=n.Pressable;n.RefreshControl;const ne=n.ScrollView;n.SectionList,n.StatusBar,n.StyleSheet,n.Switch;const R=n.Text;n.TextInput,n.TouchableHighlight,n.TouchableOpacity,n.TouchableWithoutFeedback,n.Touchable;const M=n.View;n.VirtualizedList,n.Form,n.FormArrow,n.FormCTA,n.FormCTAButton,n.FormCardSection,n.FormCheckbox;const E=n.FormDivider;n.FormHint,n.FormIcon,n.FormInput,n.FormLabel,n.FormRadio;const a=n.FormRow,D=n.FormSection;n.FormSelect,n.FormSubLabel;const A=n.FormSwitch;n.FormTernaryCheckBox,n.FormText,n.FormTextColors,n.FormTextSizes;function oe(t){window.enmity.plugins.registerPlugin(t)}function r(t){return window.enmity.assets.getIDByName(t)}const f={byProps:(...t)=>window.enmity.modules.filters.byProps(...t),byName:(t,o)=>window.enmity.modules.filters.byName(t,o),byTypeName:(t,o)=>window.enmity.modules.filters.byTypeName(t,o),byDisplayName:(t,o)=>window.enmity.modules.filters.byDisplayName(t,o)};function H(...t){return window.enmity.modules.bulk(...t)}function le(...t){return window.enmity.modules.getByProps(...t)}window.enmity.modules.common;function J(t,o,l){return window.enmity.utilities.findInReactTree(t,o,l)}function ae(t){return window.enmity.patcher.create(t)}var ie="AccountInfo",Y="1.9.0",re="Shows Account Information and Account Assets.",q="development",ce=[{name:"acquite",id:"581573474296791211"}],me="#ff1f84",se={name:ie,version:Y,description:re,release:q,authors:ce,color:me};const[ue,de]=H(f.byProps("transitionToGuild"),f.byProps("setString"));var ge=({settings:t})=>{const o=r("ic_selection_checked_24px"),l=z.createThemedStyleSheet({icon:{color:S.ThemeColorMap.INTERACTIVE_NORMAL}});return e.createElement(e.Fragment,null,e.createElement(ne,null,e.createElement(D,{title:"Enable Account Date Information"},e.createElement(a,{label:"Time of Creation",subLabel:"Show when an account was Created",leading:e.createElement(a.Icon,{style:l.icon,source:r("ic_header_members_add_24px")}),trailing:e.createElement(A,{value:t.getBoolean("createBtn",!0),onValueChange:()=>{t.toggle("createBtn",!0),s.open({content:`Successfully ${t.getBoolean("createBtn",!0)?"enabled":"disabled"} time of Account Creation.`,source:o})}})}),e.createElement(E,null),e.createElement(a,{label:"Time of Joining Server",subLabel:"Show when an account Joined a Server",leading:e.createElement(a.Icon,{style:l.icon,source:r("ic_leave_24px")}),trailing:e.createElement(A,{value:t.getBoolean("joinBtn",!0),onValueChange:()=>{t.toggle("joinBtn",!0),s.open({content:`Successfully ${t.getBoolean("joinBtn",!0)?"enabled":"disabled"} time of Joining Server.`,source:o})}})})),e.createElement(E,null),e.createElement(D,{title:"Enable Dedicated Buttons"},e.createElement(a,{label:"Assets",subLabel:"Show dedicated button to view Account Assets",leading:e.createElement(a.Icon,{style:l.icon,source:r("img_nitro_profile_banner")}),trailing:e.createElement(A,{value:t.getBoolean("pfpBtn",!1),onValueChange:()=>{t.toggle("pfpBtn",!1),s.open({content:`Successfully ${t.getBoolean("pfpBtn",!1)?"enabled":"disabled"} dedicated Assets Button.`,source:o})}})}),e.createElement(E,null),e.createElement(a,{label:"Status",subLabel:"Show dedicated button to copy a user's Status",leading:e.createElement(a.Icon,{style:l.icon,source:r("ic_passport_24px")}),trailing:e.createElement(A,{value:t.getBoolean("statusBtn",!1),onValueChange:()=>{t.toggle("statusBtn",!1),s.open({content:`Successfully ${t.getBoolean("statusBtn",!1)?"enabled":"disabled"} dedicated Status Button.`,source:o})}})})),e.createElement(E,null),e.createElement(D,{title:"Disable Entire Plugin"},e.createElement(a,{label:"Disable Plugin",leading:e.createElement(a.Icon,{style:l.icon,source:r("ic_rulebook_16px")}),trailing:e.createElement(A,{value:t.getBoolean("masterDisable",!1),onValueChange:()=>{t.toggle("masterDisable",!1),s.open({content:`Successfully ${t.getBoolean("masterDisable",!1)?"disabled":"enabled"} AccountInfo.`,source:o})}})})),e.createElement(E,null),e.createElement(D,{title:"Source Code"},e.createElement(a,{label:"Download",subLabel:"Copy the link of the plugin to Clipboard",leading:e.createElement(a.Icon,{style:l.icon,source:r("toast_copy_link")}),trailing:a.Arrow,onPress:()=>{de.setString("https://raw.githubusercontent.com/acquitelol/account-info/main/dist/AccountInfo.js"),s.open({content:"Copied to clipboard",source:r("pending-alert")})}}),e.createElement(a,{label:"Source",subLabel:"Open the Repo of the Plugin Externally",leading:e.createElement(a.Icon,{style:l.icon,source:r("ic_leave_stage")}),trailing:a.Arrow,onPress:()=>{ue.openURL("https://github.com/acquitelol/account-info")}})),e.createElement(a,{label:`Plugin Version: ${Y}
Release Channel: ${q}`})))};function pe(t,o,l){window.enmity.settings.set(t,o,l)}function m(t,o,l){return window.enmity.settings.getBoolean(t,o,l)}function we(t,o,l){window.enmity.settings.toggle(t,o,l)}const[K,ye,fe,B,W,be,Ee]=H(f.byDisplayName("UserProfileHeader",!1),f.byProps("getMember"),f.byProps("getGuild"),f.byProps("transitionToGuild"),f.byProps("setString"),f.byName("HeaderAvatar",!1),f.byName("ProfileBanner",!1)),T=ae("account-info"),ve=le("getStatus","getState"),Se={...se,onStart(){T.instead(K,"default",(t,o,l)=>{var d,g,p,w;const[c,y]=e.useState("Profile Picture");let v=m("AccountInfo","pfpBtn",!1),$=m("AccountInfo","statusBtn",!1),N=m("AccountInfo","createBtn",!0),x=m("AccountInfo","joinBtn",!0),X=m("AccountInfo","masterDisable",!1);const[{user:i,channel:I,type:Q}]=o;try{var F=o[0].displayProfile.banner}catch{pe("AccountInfo","pfpToggle",!0)}if(Q!==0)return l.apply(t,o);const u=z.createThemedStyleSheet({container:{marginLeft:15.5,marginRight:15.5,marginTop:17.5},header:{color:S.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontFamily:S.Fonts.DISPLAY_BOLD,textTransform:"uppercase",fontSize:12.75,letterSpacing:.25},information:{borderRadius:4,backgroundColor:S.ThemeColorMap.BACKGROUND_TERTIARY,marginTop:10,marginBottom:10},item:{color:S.ThemeColorMap.TEXT_MUTED},icon:{color:S.ThemeColorMap.INTERACTIVE_NORMAL},switchArrow:{marginRight:15.5}}),V=r("img_nitro_profile_banner"),Z=r("pending-alert"),ee=r("toast_copy_link"),U=r("ic_header_members_add_24px"),j=r("ic_leave_24px"),h=I==null?void 0:I.guild_id,b=h&&ye.getMember(I.guild_id,i.id),O=h&&fe.getGuild(I.guild_id),_=h?((d=b==null?void 0:b.getAvatarURL)==null?void 0:d.call(b,!1,4096,!0))||((g=i==null?void 0:i.getAvatarURL)==null?void 0:g.call(i,!1,4096,!0)):(p=i==null?void 0:i.getAvatarURL)==null?void 0:p.call(i,!1,4096,!0);if(!_)return l.apply(t,o);const te=i.discriminator%5,G=typeof _=="number"?`https://cdn.discordapp.com/embed/avatars/${te}.png`:_==null?void 0:_.replace(".webp",".png"),C=ve.getActivities(i.id).find(P=>P.type===4);return X?e.createElement(e.Fragment,null,l.apply(t,o)):e.createElement(e.Fragment,null,l.apply(t,o),e.createElement(M,{style:u.container},N||x?e.createElement(e.Fragment,null,e.createElement(R,{style:u.header},"Account Information"),e.createElement(M,{style:u.information},N&&e.createElement(e.Fragment,null,e.createElement(a,{label:"Created",leading:e.createElement(a.Icon,{style:u.icon,source:U}),onPress:()=>{s.open({content:L(i.createdAt).format("LLL"),source:U})},trailing:()=>e.createElement(R,{style:u.item},L(i.createdAt).fromNow())})),N&&x&&h&&b&&e.createElement(E,null),x&&h&&b&&e.createElement(e.Fragment,null,e.createElement(a,{label:`Joined ${(w=O==null?void 0:O.name)!=null?w:""}`,leading:e.createElement(a.Icon,{style:u.icon,source:j}),onPress:()=>{s.open({content:L(b.joinedAt).format("LLL"),source:j})},trailing:()=>e.createElement(R,{style:u.item},L(b.joinedAt).fromNow())})))):e.createElement(e.Fragment,null),v||$?e.createElement(e.Fragment,null,e.createElement(R,{style:u.header},"Account Assets"),e.createElement(M,{style:u.information},v&&e.createElement(e.Fragment,null,e.createElement(a,{label:`View ${i.username}'s ${c}`,leading:e.createElement(a.Icon,{style:u.icon,source:V}),trailing:a.Arrow,onPress:()=>{F?m("AccountInfo","pfpToggle",!0)?B.openURL(G):B.openURL(`https://cdn.discordapp.com/banners/${i.id}/${F}.${F.startsWith("a_")?"gif":"png"}?size=4096`):B.openURL(G)},onLongPress:F?()=>{we("AccountInfo","pfpToggle",!0),s.open({content:`Switched to ${m("AccountInfo","pfpToggle",!0)?"profile picture":"banner"} link.`,source:V}),y(c=="Profile Picture"?"Banner":"Profile Picture")}:()=>{s.open({content:`${i.username} does not have a banner.`,source:V})}})),v&&$&&e.createElement(E,null),C&&$&&e.createElement(e.Fragment,null,e.createElement(a,{label:`Copy ${i.username}'s Status`,leading:e.createElement(a.Icon,{style:u.icon,source:ee}),trailing:a.Arrow,onPress:()=>{try{var P=C.emoji.name}catch{}W.setString(`${P?`:${P}:`:""} ${C.state?C.state:""}`),s.open({content:"Copied to clipboard",source:Z})}})))):e.createElement(e.Fragment,null)))}),T.after(be,"default",(t,[{user:o}],l)=>{var d;let g=m("AccountInfo","pfpBtn",!1),p=m("AccountInfo","masterDisable",!1);const w=(d=o==null?void 0:o.getAvatarURL)==null?void 0:d.call(o,!1,4096,!0);if(!w)return l;const c=o.discriminator%5,y=typeof w=="number"?`https://cdn.discordapp.com/embed/avatars/${c}.png`:w==null?void 0:w.replace(".webp",".png");return p||g?e.createElement(e.Fragment,null,l):e.createElement(k,{onPress:()=>B.openURL(y)},l)}),T.after(Ee,"default",(t,[{bannerSource:o}],l)=>{let d=m("AccountInfo","pfpBtn",!1),g=m("AccountInfo","masterDisable",!1);if(typeof(o==null?void 0:o.uri)!="string"||!l)return l;const p=o.uri.replace(/(?:\?size=\d{3,4})?$/,"?size=4096").replace(".webp",".png");return console.log(o),g||d?e.createElement(e.Fragment,null,l):e.createElement(k,{onPress:()=>B.openURL(p)},l)}),T.after(K,"default",(t,o,l)=>{const d=J(l,c=>{var y;return(y=c==null?void 0:c.props)==null?void 0:y.customStatusActivity});if(!d)return l;const g=J(l,c=>{var y,v;return(v=(y=c==null?void 0:c[2])==null?void 0:y.props)==null?void 0:v.customStatusActivity});if(!g||m("AccountInfo","statusBtn",!1)||m("AccountInfo","masterDisable",!1))return l;const p=g[2].props.customStatusActivity,w=r("pending-alert");g[2]=e.createElement(k,{onPress:()=>{try{var c=p.emoji.name}catch{}W.setString(`${c?`:${c}:`:""} ${p.state?p.state:""}`),s.open({content:"Copied to clipboard",source:w})}},d)})},onStop(){T.unpatchAll()},getSettingsPanel({settings:t}){return e.createElement(ge,{settings:t})}};oe(Se);
