﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Dfdfdf_1112
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Организации.
    /// </summary>
    // *** Start programmer edit section *** (Организации CustomAttributes)

    // *** End programmer edit section *** (Организации CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОрганизацииE", new string[] {
            "КодОрг as \'Код орг\'",
            "Наименование as \'Наименование\'"})]
    [View("ОрганизацииL", new string[] {
            "КодОрг as \'Код орг\'",
            "Наименование as \'Наименование\'"})]
    public class Организации : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодОрг;
        
        private string fНаименование;
        
        // *** Start programmer edit section *** (Организации CustomMembers)

        // *** End programmer edit section *** (Организации CustomMembers)

        
        /// <summary>
        /// КодОрг.
        /// </summary>
        // *** Start programmer edit section *** (Организации.КодОрг CustomAttributes)

        // *** End programmer edit section *** (Организации.КодОрг CustomAttributes)
        public virtual int КодОрг
        {
            get
            {
                // *** Start programmer edit section *** (Организации.КодОрг Get start)

                // *** End programmer edit section *** (Организации.КодОрг Get start)
                int result = this.fКодОрг;
                // *** Start programmer edit section *** (Организации.КодОрг Get end)

                // *** End programmer edit section *** (Организации.КодОрг Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Организации.КодОрг Set start)

                // *** End programmer edit section *** (Организации.КодОрг Set start)
                this.fКодОрг = value;
                // *** Start programmer edit section *** (Организации.КодОрг Set end)

                // *** End programmer edit section *** (Организации.КодОрг Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Организации.Наименование CustomAttributes)

        // *** End programmer edit section *** (Организации.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Организации.Наименование Get start)

                // *** End programmer edit section *** (Организации.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Организации.Наименование Get end)

                // *** End programmer edit section *** (Организации.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Организации.Наименование Set start)

                // *** End programmer edit section *** (Организации.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Организации.Наименование Set end)

                // *** End programmer edit section *** (Организации.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОрганизацииE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОрганизацииE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОрганизацииE", typeof(IIS.Dfdfdf_1112.Организации));
                }
            }
            
            /// <summary>
            /// "ОрганизацииL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОрганизацииL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОрганизацииL", typeof(IIS.Dfdfdf_1112.Организации));
                }
            }
        }
    }
}
